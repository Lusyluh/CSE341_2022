
const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;


//function to return all of the documents in contacts collection
const getDocuments = async (req, res, next) => {
    const result = await mongodb.getDb().db('lesson2').collection('contacts').find();

    result.toArray().then((docs) => {
      //return "docs" array
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(docs);
    });

};

//function to return a single document from the collection
const getSingle = async (req, res, next) => {
  const userId = new ObjectId(req.params.id);
  const result = await mongodb
    .getDb()
    .db('lesson2')
    .collection('contacts')
    .find({ _id: userId });
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists[0]);
  });
};

//add a new conacts on the list 
const addContact = async (request, response) => {
  const result = await mongodb.getDb().db('lesson2').collection('contacts').insertOne(request.body, (error, result) => {
    if(error) {
        return response.status(500).send(error);
    }
    response.send(result);
    console.log(result);
  });
};

module.exports = {getDocuments, getSingle, addContact};