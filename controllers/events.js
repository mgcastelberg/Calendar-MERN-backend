
const { response } = require("express");

const getEvents = (req, res = response) => {
    res.json({
        status:true,
        msg: 'getEventos...',
    });
}

const createEvent = (req, res = response) => {
    res.json({
        status:true,
        msg: 'createEvent...',
    });
}
const updateEvent = (req, res = response) => {
    res.json({
        status:true,
        msg: 'updateEvent...',
    });
}
const deleteEvent = (req, res = response) => {
    res.json({
        status:true,
        msg: 'deleteEvent...',
    });
}


module.exports = {
    getEvents,
    createEvent,
    updateEvent,
    deleteEvent
}