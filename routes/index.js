const routes = require('express').Router();
const name = require('../controllers/');
routes.get('/', name.displayName);

routes.use('/', require('./contacts'));

module.exports = routes;