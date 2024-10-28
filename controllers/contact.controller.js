const Contact = require('../models/contact.model.js');


exports.create = (req, res) => {
  const contact = new Contact({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email
  });

  contact.save()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Error occurred while creating contact."
      });
    });
};

exports.findAll = (req, res) => {
  Contact.find()
    .then(contacts => {
      res.send(contacts);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Error occurred while retrieving contacts."
      });
    });
};


exports.findOne = (req, res) => {
  Contact.findById(req.params.id)
    .then(contact => {
      if(!contact) {
        return res.status(404).send({
          message: "Contact not found with id " + req.params.id
        });
      }
      res.send(contact);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving contact with id " + req.params.id
      });
    });
};