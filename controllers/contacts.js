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
    .find({
      _id: userId
    });
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists[0]);
  });
};

//add a new contact to the the database
const addContact = async (req, response) => {
  const contact = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    favoriteColor: req.body.favoriteColor,
    birthday:req.body.birthday
  };
  const result = await mongodb.getDb().db('lesson2').collection('contacts').insertOne(contact);
  if (result.acknowledged) {
    response.status(201).json(result);
  } else {
    response.status(500).json(result.error || 'Contact not added');
  }
};

//function to update a contact. 
//This route should allow for a url similar to this: api-url-path/contacts/id-to-modify

const updateContact = async (req, res) => {
  const contId = new ObjectId(req.params.id);
  const contact = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    favoriteColor: req.body.favoriteColor,
    birthday:req.body.birthday
  };
  const result = await mongodb.getDb().db('lesson2').collection('contacts').replaceOne({
    _id: contId
  }, contact);
  if (result.modifiedCount > 0) {
    res.status(204).send();
  } else {
    res.status(500).json(result.error || 'Error occurred while updating the contact.');
  }

  console.log(`${result.modifiedCount} document(s) was updated.`)
};

//DELETE a contact and return status code representing success
const deleteContact = async (req, res) => {
  const contId = new ObjectId(req.params.id);
  const result = await mongodb.getDb().db('lesson2').collection('contacts').deleteOne({
    _id: contId
  }, true);
  if (result.deletedCount === 1) {
    res.status(200).send();
    console.log("Successfully deleted one document.");
  } else {
    res.status(500).json(result.error || 'No documents matched the query. Deleted 0 documents.')
  }
};

module.exports = {
  getDocuments,
  getSingle,
  addContact,
  updateContact,
  deleteContact
};