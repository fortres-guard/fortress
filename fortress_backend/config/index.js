const sequelize = require('./db');
const transporter = require('./mailer');

module.exports = { sequelize, transporter };
