const mongoose = require('mongoose');

const PetzeeSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

module.exports = mongoose.model('Petzee', PetzeeSchema);