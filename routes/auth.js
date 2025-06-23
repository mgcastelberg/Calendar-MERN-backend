/*
    Rutas de autenticación / Auth
    host + /api/auth
*/

const { Router } = require('express');
const { check } = require('express-validator');
const router = Router();

const { createUser, loginUser, renewToken } = require('../controllers/auth');
const { validarCampos } = require('../middlewares/validar-campos');

router.post('/',[
    check('email', 'Email is required').trim().isEmail(),
    check('password', 'Password must be at least 6 characters long').trim().isLength({ min: 6 }),
    validarCampos
], loginUser);

router.post('/renew', renewToken);

router.post('/register',
    [   // Middlewares
        check('name', 'Name is required').not().isEmpty(),
        check('email', 'Email is required').isEmail(),
        check('password', 'Password must be at least 6 characters long').isLength({ min: 6 }),
        validarCampos
    ], createUser);

module.exports = router;