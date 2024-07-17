const { v4: uuidv4 } = require('uuid');
const User = require('../models/User');
const generateToken = require('../utils/generateToken');
const { transporter } = require('../config');
const jwt = require('jsonwebtoken');
const tokens = {};

const joinWaitlist = async (req, res) => {
  const { email } = req.body;

  try {
    const [user, created] = await User.findOrCreate({
      where: { email },
      defaults: { email, verified: false },
    });

    if (!created) {
      return res.status(400).json({ message: 'Email already in waitlist' });
    }

    const token = generateToken(email);
    const verificationId = uuidv4();

    tokens[verificationId] = token;

    const verificationUrl = `http://localhost:${process.env.PORT}/api/verify-email/${verificationId}`;

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Verify Your Email Address',
      text: `Please verify your email by clicking on the following link: ${verificationUrl}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error(error);
        return res.status(500).json({ message: 'Failed to send verification email' });
      }
      res.status(200).json({ message: 'Verification email sent successfully!' });
    });
  } catch (error) {
    console.error('Error saving to database:', error);
    res.status(500).json({ message: 'Failed to join waitlist' });
  }
};

const verifyEmail = async (req, res) => {
  const { id } = req.params;
  const token = tokens[id];

  if (!token) {
    return res.status(400).json({ message: 'Invalid or expired token' });
  }

  jwt.verify(token, process.env.JWT_SECRET, async (err, decoded) => {
    if (err) {
      return res.status(400).json({ message: 'Invalid or expired token' });
    }

    const email = decoded.email;

    try {
      const user = await User.findOne({ where: { email } });
      if (!user) {
        return res.status(400).json({ message: 'User not found' });
      }

      user.verified = true;
      await user.save();

      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: 'Welcome to FortressGuard',
        text: 'Thank you for verifying your email! We will notify you when we launch our services.'
      };

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.error(error);
          return res.status(500).json({ message: 'Failed to send welcome email' });
        }

        delete tokens[id];

        res.status(200).send('Your email has been verified! Welcome email sent.');
      });
    } catch (error) {
      console.error('Error updating user:', error);
      res.status(500).json({ message: 'Failed to verify email' });
    }
  });
};

module.exports = { joinWaitlist, verifyEmail };
