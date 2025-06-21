const { response } = require('express');

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

const createUser = (req, res = response) => {

    const { name, email, password } = req.body;

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