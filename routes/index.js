const routes = require('express').Router();
const name = require('../controllers/');


routes.use('/contacts', require('./contacts'));

module.exports = routes;