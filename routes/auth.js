/*
    Rutas de autenticación / Auth
    host + /api/auth
*/

const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
    console.log('se requiere /');
    res.json({
        status:true,
        msg: 'Ruta de autenticación'
    });
});

module.exports = router;