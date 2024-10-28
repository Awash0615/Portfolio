module.exports = (app) => {
    const contacts = require('../controllers/contact.controller.js');
  
    // Create a new Contact
    app.post('/api/contacts', contacts.create);
  
    // Retrieve all Contacts
    app.get('/api/contacts', contacts.findAll);
  
    // Retrieve a single Contact with id
    app.get('/api/contacts/:id', contacts.findOne);
  
    // Update a Contact with id
    app.put('/api/contacts/:id', contacts.update);
  
    // Delete a Contact with id
    app.delete('/api/contacts/:id', contacts.delete);
  
    // Delete all Contacts
    app.delete('/api/contacts', contacts.deleteAll);
  };