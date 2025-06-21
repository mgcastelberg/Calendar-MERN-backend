const { response } = require('express');

const loginUser = (req, res = response) => {
    res.json({
        status:true,
        msg: 'Login...'
    });
}

const createUser = (req, res) => {
    res.json({
        status:true,
        msg: 'Register...'
    });
}

const renewToken = (req, res) => {
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