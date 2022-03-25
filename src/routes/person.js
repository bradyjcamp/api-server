'use strict';

const express = require('express');
const { personCollection } = require('../models/index.js');
const app = express();
const router = express.Router();
app.use(express.json());

const addPerson = async (req, res, next) => {
  let newPersonData = req.body;
  let responseData = await personCollection.create(newPersonData);
  res.send(responseData);
};

const getAllPersons =  async (req, res, next) => {
  let allPersonData = await personCollection.findAll();
  res.send(allPersonData);
};

const getOnePerson = async (req, res, next) => {
  let specificPerson = req.params.id;
  let query = { where: {id: specificPerson} };
  
  let onePerson = await personCollection.findOne(query);
  res.status(200).send(onePerson);
};

const updatePerson = async (req, res, next) => {
  let specificPerson = req.params.id;
  let query = { where: {id: specificPerson} };
  
  let onePerson = await personCollection.update(query);
  res.send(onePerson);
};

const deletePerson = async (req, res, next) => {
  let specificPerson = req.params.id;
  let query = { where: {id: specificPerson} };
  
  let personToRemove = await personCollection.findOne(query);
  await personCollection.destoy(query);
  res.send(personToRemove);
};


router.post('/person', addPerson);
router.get('/person', getAllPersons);
router.get('/person/:id', getOnePerson);
router.put('/person/:id', updatePerson);
router.delete('/person/:id', deletePerson);



module.exports = router;