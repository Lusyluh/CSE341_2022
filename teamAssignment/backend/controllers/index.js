//creates an endpoint to get all the users info from the API:
const mongodb = require('../db/connect');

getData = (req, res) => {
    const data =
      'Hello from express';
    res.status(200).send(data);
  };
  
  module.exports = {
    displayName,
  };