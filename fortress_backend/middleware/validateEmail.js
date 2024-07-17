const validator = require('validator');

const validateEmail = (req, res, next) => {
  const { email } = req.body;
  if (!validator.isEmail(email)) {
    return res.status(400).json({ message: 'Invalid email address' });
  }
  next();
};

module.exports = validateEmail;
