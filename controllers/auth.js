const { response } = require('express');
const Usuario = require('../model/Usuario'); // mongoose
const User = require('../model/User_model'); // sequelize

const loginUser = (req, res = response) => {

    const { email, password } = req.body;

    res.json({
        status:true,
        msg: 'Login...',
        user: {
            email,
            password
        }
    });
}

const createUser = async(req, res = response) => {
    try {
        const { name, email, password } = req.body;

        const usuario = new Usuario({ name, email, password }); // mongoose
        await usuario.save(); // mongoose

        const newUser = await User.create({ name, email, password }); // sequelize
    
        res.status(201).json({
            status:true,
            msg: 'Register...'
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            status:false,
            msg: 'Error a la hora de crear el usuario'
        });
    }
}

const renewToken = (req, res = response) => {
    res.json({
        status:true,
        msg: 'Renew Token...'
    });
}

module.exports = {
    loginUser,
    createUser,
    renewToken
}