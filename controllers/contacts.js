
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

//add a new contact to the the database
const addContact = async (request, response) => {
  const result = await mongodb.getDb().db('lesson2').collection('contacts').insertOne(request.body, (error, result) => {
    if(error) {
        return response.status(500).send(error);
    }
    response.send(result);
    console.log(result);
  });
};

//function to update a contact. 
//This route should allow for a url similar to this: api-url-path/contacts/id-to-modify

const updateContact = async (req, res) =>{
  const contId = new ObjectId(req.params.ObjectId);
  const result = await mongodb.getDb().db('lesson2').collection('contacts').replaceOne({ _id: contId }, request.body)
  res.send(result);
  console.log(result);
};

module.exports = {getDocuments, getSingle, addContact, updateContact};