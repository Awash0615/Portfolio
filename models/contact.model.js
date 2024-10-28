const mongoose = require('mongoose');

const ContactSchema = mongoose.Schema({
  firstname: String,
  lastname: String,
  email: String
});

module.exports = mongoose.model('Contact', ContactSchema);