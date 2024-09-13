const express = require('express');
const ideasRouter = express.Router(); 
const {getAllFromDatabase, addToDatabase} = require('./db');

ideasRouter.get('/', (req,res, next) => {
    const ideas = getAllFromDatabase('ideas');
    //console.log(ideas)
    res.send(ideas);
});

ideasRouter.post('/', (req, res, next) => {
    const {weeklyRevenue, numWeeks} = req.body;
    req.body.weeklyRevenue = parseInt(weeklyRevenue);
    req.body.revenue = parseInt(numWeeks);
    const newIdea = addToDatabase('ideas', req.body);
    if(newIdea) {
        res.status(201).send(newIdea)
    } else{
        res.status(401).send()
    }
    
    console.log(req.body)
});

 

module.exports = ideasRouter;