const { DataTypes } = require('sequelize');
const { sequelize } = require('../database/mysql');

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
    type: DataTypes.DATE,
    allowNull: false,
  },
  end: {
    type: DataTypes.DATE,
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

Event.associate = function(models) {
  Event.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' }); // CORRECTO
};

// Elimina las propiedades createdAt y updatedAt
// Event.prototype.toJSON = function () {
//   const values = { ...this.get() };
//   delete values.createdAt;
//   delete values.updatedAt;
//   return values;
// };

module.exports = Event;