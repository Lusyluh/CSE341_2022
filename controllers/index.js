const res = require('express/lib/response');
const mongodb = require('../db/connect');

displayName = (req, res) => {
    const data =
      'Zanele Magadla';
    res.status(200).send(data);
  };

module.exports = {displayName};