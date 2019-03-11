const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create schema
const AdSchema = new Schema({
  address: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  price: {
    type: String
  },
  image: {
    type: String
  }
});

module.exports = Ads = mongoose.model('ad', AdSchema);
