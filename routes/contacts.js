const routes = require('express').Router();
const contactsController = require('../controllers/');

routes.get('/', contactsController.getDocuments);

module.exports = routes;