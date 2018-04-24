const mongoose = require('mongoose');
const db = require('./index.js');
mongoose.Promise = global.Promise;

const photoSchema = new mongoose.Schema({
  title: String,
  isVerified: Boolean,
  photoUrl: String,
  thumbnailUrl: String,
  listingId: Number,
});

const Photo = mongoose.model('Photo', photoSchema);

module.exports = Photo;