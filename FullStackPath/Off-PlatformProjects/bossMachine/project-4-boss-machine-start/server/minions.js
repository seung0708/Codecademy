const express = require('express');
const minionsRouter = express.Router(); 
const {getAllFromDatabase, addToDatabase} = require('./db');

//GET all minions
minionsRouter.get('/', (req,res, next) => {
   const minions = getAllFromDatabase('minions');
   res.send(minions);
})

minionsRouter.post('/', (req,res, next) => {
   
   const newMinion = addToDatabase('minions', req.body);
   if(newMinion) {
      res.status(201).send(newMinion);
   } else {
      res.status(400).send();
   }
})


module.exports = minionsRouter;