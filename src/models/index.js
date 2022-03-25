'use strict';

const { Sequelize, DataTypes } = require('sequelize');
const Collection = require ('./lib/collection-class');
const vehicleSchema = require('./vehicles');
const personSchema = require('./person');

const DATABASE_URL = process.env.NODE_ENV === 'test' ? 'sqlite::memory' : process.env.DATABASE_URL || 'postgresql://localhost:5432/basic-api-server';

const db = new Sequelize(DATABASE_URL, {
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});

const VehicleModel = vehicleSchema(db, DataTypes);
const PersonModel = personSchema(db, DataTypes);

PersonModel.hasMany(VehicleModel, { foreignKey: 'personId', sourceKey: 'id'});
VehicleModel.belongsTo(PersonModel, { foreignKey: 'personId', targetKey: 'id'});



module.exports = {
  db,
  vehicleCollection: new Collection(VehicleModel),
  personCollection: new Collection(PersonModel),
};
