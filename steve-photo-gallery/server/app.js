const express = require('express');
const db = require('../database/Photo');

const app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use('/rooms/:id', express.static('public'));

app.get('/rooms/:id/photos', (req, res) => {
  db.find({listingId: req.params.id}).exec(((err, photos) => {
    res.send(photos);
  }));
});

module.exports = app;