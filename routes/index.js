const routes = require('express').Router();
const name = require('../controllers/');
routes.get('/', name.displayName);

routes.use('/', require('./swagger'));
routes.use('/contacts', require('./contacts'));

module.exports = routes;