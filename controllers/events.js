
const { response } = require("express");
// const Event = require('../model/Event_model');
const moment = require("moment");
// const User = require("../model/User_model");
const { Event, User } = require('../model'); // importa desde index.js

const getEvents = async (req, res = response) => {

    // const events = await Event.findAll(); // sequelize
    const events = await Event.findAll({
                            attributes: { exclude: ['user_id', 'createdAt', 'updatedAt'] },
                            include: {
                                model: User,
                                as: 'user',
                                attributes: ['id','name']
                            }
                        });

    const adjustedEvents = events.map(event => {
        const eventData = event.toJSON();
        eventData.start = moment(eventData.start).tz('America/Mexico_City').format(); // o tu zona
        eventData.end = moment(eventData.end).tz('America/Mexico_City').format();
        return eventData;
    });

    res.json({
        status:true,
        msg: 'getEventos...',
        events:adjustedEvents
    });
}

const createEvent = async (req, res = response) => {
    const { title, start, end, notes } = req.body;
    
    // console.log({ title, start, end, notes } );
    // const parsedStart = moment(req.body.start, 'YYYY-MM-DD HH:mm:ss').toDate();
    // const parsedEnd = moment(req.body.end, 'YYYY-MM-DD HH:mm:ss').toDate();
    // console.log('Start:', parsedStart);
    // console.log('End:', parsedEnd);

    try {
        newEvent = await Event.create({ title,  start, end, notes, user_id: req.uid }); // sequelize
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

const updateEvent = async(req, res = response) => {

    const eventId = req.params.id;
    const { title, start, end, notes } = req.body;
    // console.log(eventId, title, start, end, notes);
    try {
        let event = await Event.findOne({ where: { id: eventId } });
        if ( !event ) {
            return res.status(400).json({
                status:false,
                msg: 'Event not found'
            });
        }

        if ( event.user_id !== req.uid ) {
            return res.status(401).json({
                status:false,
                msg: 'You do not have permission to update this event'
            });
        }

        event.title = title;
        event.start = start;
        event.end = end;
        event.notes = notes;
        await event.save();

        res.json({
            status:true,
            msg: 'updateEvent...',
            event: event
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            status:false,
            msg: 'Database error, contact administrator',
        });
    }
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