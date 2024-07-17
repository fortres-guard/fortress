const { transporter } = require('../config');
const Contact = require('../models/Contact'); // Adjust the path if necessary

const sendContactMessage = async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const newContact = await Contact.create({ name, email, message });

    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER,
      subject: `New Contact Message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error sending email:', error);
        return res.status(500).json({ message: 'Failed to send message' });
      }
      res.status(200).json({ message: 'Message sent successfully!', contact: newContact });
    });
  } catch (error) {
    console.error('Error saving contact message:', error);
    res.status(500).json({ message: 'Failed to save message' });
  }
};

module.exports = { sendContactMessage };
