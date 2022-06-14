const routes = require('express').Router();
const contactsController = require('../controllers/');

routes.get('/', contactsController.getDocuments);
routes.get('/:id', contactsController.getSingle);

module.exports = routes;