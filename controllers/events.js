
const { response } = require("express");
const Event = require('../model/Event_model');

const getEvents = (req, res = response) => {
    res.json({
        status:true,
        msg: 'getEventos...',
    });
}

const createEvent = async (req, res = response) => {
    const { title, start, end, notes } = req.body;
    
    try {
        newEvent = await Event.create({ title, start, end, notes, user_id: req.uid }); // sequelize
    } catch (error) {
        console.log(error);
        res.status(500).json({
            status:false,
            msg: 'Database error, contact administrator',
        });
    }

    res.json({
        status:true,
        msg: 'createEvent...',
        event: newEvent
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