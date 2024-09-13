const express = require('express');
const meetingsRouter = express.Router(); 
const {getAllFromDatabase} = require('./db');
//Get all meetings
meetingsRouter.get('/', (req, res, next) => {
    const meetings = getAllFromDatabase('meetings');
    res.send(meetings);
})

meetingsRouter.post('/', (req,res,next) => {
    
})



module.exports = meetingsRouter;