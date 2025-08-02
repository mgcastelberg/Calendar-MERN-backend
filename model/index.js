const User = require('./User_model');
const Event = require('./Event_model');

// Ejecutar asociaciones
User.associate?.({ Event });
Event.associate?.({ User });

module.exports = {
  User,
  Event
};