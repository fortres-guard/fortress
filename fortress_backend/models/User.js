const { DataTypes } = require('sequelize');
const { sequelize } = require('../config');

const User = sequelize.define('User', {
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  verified: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
});

module.exports = User;
