'use strict';

class Collection{
  constructor(model){
    this.model = model;
  }
  
  async create(json) {
    try{
      let instance = await this.model.create(json);
      return instance;
    }catch (err) {
      console.log(err);
      return err;
    }
  }

  async readAll(){
    try{
      let results = await this.model.findAll();
      return results;
    }catch (err) {
      console.log('Error:', err);
      return err;
    }
  }

  async read(id, options){
    try{
      const idNum = parseInt(id);
      let query = { where: { id: idNum }, ...options };
      let result = await this.model.findOne(query);
      return result;
    } catch (err) {
      console.log(err);
      return err;
    }
  }

  async update(json, id) {
    try {
      const idNum = parseInt(id);
      let query = { where: {id: idNum} };
      await this.model.update(json, query);
      let updatedResults = await this.model.findOne(query);
      return updatedResults;
    }catch(err) {
      console.log(err);
      return err;
    }
  }

  
  async delete(id){
    try{
      const idNum = parseInt(id);
      let query = { where: { id: idNum } };

      let instanceToRemove = await this.model.findOne(query);
      await this.model.destroy(query);
      return instanceToRemove;
    } catch (err){
      console.log(err);
      return err;
    }
  }
} 

module.exports = Collection;
