const { response } = require('express');
const { validationResult } = require('express-validator');

const loginUser = (req, res = response) => {

    const { email, password } = req.body;

    // Manejo de errores
    const errors = validationResult(req);
    if ( !errors.isEmpty() ) {
        return res.status(400).json({
            status: false,
            errors: errors.mapped()
        });
    }

    res.json({
        status:true,
        msg: 'Login...',
        user: {
            email,
            password
        }
    });
}

const createUser = (req, res = response) => {

    const { name, email, password } = req.body;

    // Manejo de errores
    const errors = validationResult(req);
    if ( !errors.isEmpty() ) {
        return res.status(400).json({
            status: false,
            errors: errors.mapped()
        });
    }

    if ( password.length < 6 ) {
        return res.status(400).json({
            status: false,
            msg: 'Password must be at least 6 characters long'
        });
    }

    res.status(201).json({
        status:true,
        msg: 'Register...',
        user: {
            name,
            email,
            password
        }
    });
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