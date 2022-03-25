'use strict';

const express = require('express');
const { vehicleCollection } = require('../models/index');
const app = express();
const router = express.Router();
app.use(express.json());

const addVehicle = async (req, res, next) => {
  let newVehicleData = req.body;
  let responseData = await vehicleCollection.create(newVehicleData);
  res.send(responseData);
};

const getAllVehicles =  async (req, res, next) => {
  let allVehicleData = await vehicleCollection.findAll();
  res.send(allVehicleData);
};

const getOneVehicle = async (req, res, next) => {
  let specificVehicle = parseInt(req.params.id);

  let oneVehicle = await vehicleCollection.findOne({ where: {id: specificVehicle} });
  res.status(200).json(oneVehicle);
};

const updateVehicle = async (req, res, next) => {
  let specificVehicle = parseInt(req.params.id);

  let oneVehicle = await vehicleCollection.update({ where: {id: specificVehicle} });
  res.status(200).json(oneVehicle);
};

const deleteVehicle = async (req, res, next) => {
  let specificVehicle = req.params.id;
  let query = { where: {id: specificVehicle} };

  let vehicleToRemove = await vehicleCollection.findOne(query);
  await vehicleCollection.destoy(query);
  res.send(vehicleToRemove);
};


router.post('/vehicles', addVehicle);
router.get('/vehicles', getAllVehicles);
router.get('/vehicles/:id', getOneVehicle);
router.put('/vehicles/:id', updateVehicle);
router.delete('/vehicles/:id', deleteVehicle);




module.exports = router;
