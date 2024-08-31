const mongoose = require('mongoose');

const PetSchema = new mongoose.Schema({
  name: String,
  age: String,
  location: String,
  ownerInfo: String,
  category: String,
  description: String,
  adopted: Boolean,
});

module.exports = mongoose.model('Pet', PetSchema);