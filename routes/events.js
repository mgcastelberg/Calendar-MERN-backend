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

router.get('/',[
    validateJWT
],getEvents);

router.post('/',[
    validateJWT
],createEvent);

router.post('/:id',[
    validateJWT
],updateEvent);

router.delete('/:id',[
    validateJWT
],deleteEvent);

module.exports = router;