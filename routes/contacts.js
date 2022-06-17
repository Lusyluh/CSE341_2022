const routes = require('express').Router();
const contactsController = require('../controllers/contacts');

routes.get('/', contactsController.getDocuments);
routes.get('/:id', contactsController.getSingle);
routes.post('/', contactsController.addContact);

module.exports = routes;