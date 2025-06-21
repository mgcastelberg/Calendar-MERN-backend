const express = require('express');
require('dotenv').config();

// console.log( process.env );

// Crear servidor de express
const app = express();

// Rutas
// app.get('/', (req, res) => {
//     console.log('se requiere /');
//     res.json({
//         status:true
//     });
// });



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

