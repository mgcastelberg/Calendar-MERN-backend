/*
    Rutas de autenticación / Auth
    host + /api/auth
*/

const { Router } = require('express');
const router = Router();

const { createUser, loginUser, renewToken } = require('../controllers/auth');

router.post('/', loginUser);

router.post('/renew', renewToken);

router.post('/register', createUser);

module.exports = router;