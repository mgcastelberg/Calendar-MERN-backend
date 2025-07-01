const express = require('express');
const { dbConnection: connectMongo } = require('./database/mongo');
const { dbConnection: connectMySQL, sequelize } = require('./database/mysql');
require('dotenv').config();
const cors = require('cors');

// console.log( process.env );

// Crear servidor de express
const app = express();

// Base de datos
// connectMongo();
connectMySQL();

// const sincronizar = async () => {
//     try {
//         await sequelize.sync({ force: true });
//         console.log('Base de datos sincronizada');
//     } catch (error) {
//         console.log(error);
//     }
// }
// sincronizar();

// Cors
app.use(cors());

// Directorio público
app.use(express.static('public'));

// Lectura y parseo del body
app.use(express.json());

// Middleware para x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// Todo: Login, Registro, RenewToken
app.use('/api/auth', require('./routes/auth'));

// Escuchar peticiones
app.listen(process.env.PORT, () => {
    console.log(`Escuchando peticiones en el puerto ${ process.env.PORT }`);
});

