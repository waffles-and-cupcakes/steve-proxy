const mongoose = require('mongoose');
const db = require('./index.js');
mongoose.Promise = global.Promise;

const listingSchema = new mongoose.Schema({
  _id: Number,
  name: String,
  location: String,
  address: String,
  type: String,
  maxNumOfGuests: Number,
  numOfBeds: Number,
  numOfBaths: Number,
  hostName: String,
  hostPic: String,
  amenities: [{
    amenityType: String,
    amenityValue: [{
      name: String,
      value: String
    }]
  }],
  notIncludedAmenities: [{
    type: String,
  }],
  sleepingArrangements: [{
    name: String,
    value: String 
  }],
  accessibility: [{
    type: String,
  }],
  houseRules: {
    basicRules: [{
      type: String,
    }],
    textBody: String,
  },
  cancellationPolicy: {
    policyType: String,
    description: String,
    link: String,
  },
  aboutHome: {
    summary: String,
    space: String,
    guestAccess: String,
    interactionWithGuests: String,
    otherNotes: String,
  },
});

const Listing = mongoose.model('Listing', listingSchema);

module.exports = Listing;