const { Sequelize } = require('sequelize');
require('dotenv').config();

console.log("DATABASE_URL:", process.env.DATABASE_URL);
const databaseUrl = process.env.DATABASE_URL;

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: databaseUrl,
  logging: false, // Disable logging for cleaner console output
});

module.exports = sequelize;
