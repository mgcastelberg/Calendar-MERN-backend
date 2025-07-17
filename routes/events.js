/** 
 *  Events
 *  /api/events 
 */

// Todas la rutas deben pasar por la validación del JWT
const router = require('express').Router(); // otra forma de llamar el Router
const { check } = require("express-validator");
const { validateJWT } = require("../middlewares/validar-jwt");
const { validateFields } = require("../middlewares/validar-campos");
const { getEvents, createEvent, updateEvent, deleteEvent } = require("../controllers/events");

// Como todos los endpoints son protegidos por el JWT lo subimos de nivel
router.use(validateJWT);

router.get('/', getEvents);

router.post('/', createEvent);

router.put('/:id', updateEvent);

router.delete('/:id', deleteEvent);

module.exports = router;