const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.MYSQL_DB,
  process.env.MYSQL_USER,
  process.env.MYSQL_PASSWORD,
  {
    host: process.env.MYSQL_HOST,
    dialect: 'mysql',
    logging: false, // Puedes poner true si quieres ver las consultas en consola
    // timezone: '-06:00', // fuerza a que se guarde como UTC-6
  }
);

const dbConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log('MySQL (Sequelize) conectado');
  } catch (error) {
    console.error('Error al conectar con MySQL (Sequelize):', error);
    throw new Error('No se pudo conectar a la base de datos');
  }
};

module.exports = {
  dbConnection,
  sequelize
};