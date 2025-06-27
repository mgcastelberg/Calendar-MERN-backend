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

    const { name, email, password } = req.body;

    try {

        let usuario = await Usuario.findOne({ email }); // mongoose
        // console.log(usuario);
        if ( usuario ) {
            return res.status(400).json({
                status:false,
                msg: 'Email already exists'
            });
        }
        usuario = new Usuario({ name, email, password }); // mongoose
        await usuario.save(); // mongoose

        let newUser = await User.findOne({ where: { email: email } }); // sequelize
        // console.log(newUser);
        if ( newUser ) {
            return res.status(400).json({
                status:false,
                msg: 'Email already exists Sequelize'
            });
        }
        newUser = await User.create({ name, email, password }); // sequelize
    
        res.status(201).json({
            status:true,
            msg: 'Register',
            uid: newUser.id,
            name: newUser.name
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