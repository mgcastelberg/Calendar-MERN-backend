const { DataTypes } = require('sequelize');
const { sequelize } = require('../database/mysql');

const User = sequelize.define('User', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  tableName: 'users', // nombre de la tabla en MySQL
  timestamps: true   // si no usas createdAt y updatedAt
});

module.exports = User;