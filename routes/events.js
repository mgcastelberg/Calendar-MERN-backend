/** 
 *  Events
 *  /api/events 
 */

// Todas la rutas deben pasar por la validación del JWT
const router = require('express').Router(); // otra forma de llamar el Router
const { check } = require("express-validator");
const { validateJWT } = require("../middlewares/validar-jwt");
const { validarCampos } = require("../middlewares/validar-campos");
const { getEvents, createEvent, updateEvent, deleteEvent } = require("../controllers/events");
const { isDate } = require('../helpers/isDate');

// Como todos los endpoints son protegidos por el JWT lo subimos de nivel
router.use(validateJWT);

router.get('/', getEvents);

router.post('/',[
    check('title', 'Title is required').not().isEmpty(),
    check('start', 'Start date is required').custom( isDate ),
    check('end', 'End date is required').custom( isDate ),
    validarCampos
], createEvent);

router.put('/:id', updateEvent);

router.delete('/:id', deleteEvent);

module.exports = router;