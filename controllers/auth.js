const { response } = require('express');
const bcrypt = require('bcryptjs');
const { generateJWT } = require('../helpers/jwt');
const Usuario = require('../model/Usuario'); // mongoose
const User = require('../model/User_model'); // sequelize

const loginUser = async(req, res = response) => {

    const { email, password } = req.body;

    try {

        const user = await User.findOne({ where: { email: email } });

        if ( !user ) {
            return res.status(400).json({
                status:false,
                msg: 'User not found'
            });
        }

        const validPassword = bcrypt.compareSync(password, user.password); //True or False
        if ( !validPassword ) {
            return res.status(400).json({
                status:false,
                msg: 'Password incorrect'
            });
        }

        // Generar JWT
        const token = await generateJWT(user.id, user.name);

        res.json({
            status:true,
            msg: 'Login...',
            user: {
                uid: user.id,
                name: user.name,
                token
            }
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
                status:false,
                msg: 'Please contact the administrator'
        });
    }
}

const createUser = async(req, res = response) => {

    const { name, email, password } = req.body;

    try {

        // let usuario = await Usuario.findOne({ email }); // mongoose
        // // console.log(usuario);
        // if ( usuario ) {
        //     return res.status(400).json({
        //         status:false,
        //         msg: 'Email already exists'
        //     });
        // }

        // Encriptar contraseña
        const salt = bcrypt.genSaltSync();
        const passwordHashed = bcrypt.hashSync(password, salt);

        // usuario = new Usuario({ name, email, password: passwordHashed }); // mongoose
        // await usuario.save(); // mongoose

        let user = await User.findOne({ where: { email: email } }); // sequelize
        // console.log(newUser);
        if ( user ) {
            return res.status(400).json({
                status:false,
                msg: 'Email already exists Sequelize'
            });
        }
        newUser = await User.create({ name, email, password: passwordHashed }); // sequelize

        // Generar JWT
        const token = await generateJWT(newUser.id, newUser.name);
    
        res.status(201).json({
            status:true,
            msg: 'Register',
            uid: newUser.id,
            name: newUser.name,
            token
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