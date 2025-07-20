const { DataTypes } = require('sequelize');
const { sequelize } = require('../database/mysql');
const { use } = require('react');

const Event = sequelize.define('Event', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  notes: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  start: {
    type: DataTypes.DATETIME,
    allowNull: false,
  },
  end: {
    type: DataTypes.DATETIME,
    allowNull: false
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  tableName: 'events', // nombre de la tabla en MySQL
  timestamps: true   // si no usas createdAt y updatedAt
});

module.exports = Event;