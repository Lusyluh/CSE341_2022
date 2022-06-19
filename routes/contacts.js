const routes = require('express').Router();
const contactsController = require('../controllers/contacts');

routes.get('/', contactsController.getDocuments);
routes.get('/:id', contactsController.getSingle);
routes.post('/', contactsController.addContact);
routes.put('/:id', contactsController.updateContact);
routes.delete('/:id', contactsController.deleteContact);

module.exports = routes;