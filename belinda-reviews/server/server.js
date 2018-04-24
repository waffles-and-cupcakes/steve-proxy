const express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
const cors = require('cors');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

var db = require('./../db/queries.js');

// http://mherman.org/blog/2016/03/13/designing-a-restful-api-with-node-and-postgres/
app.get('/rooms/:id/reviews', db.getRoomReviews);

// app.use('/room/:id', express.static(path.join(__dirname, '/../public')));

app.use('/rooms/:id', express.static(path.join(__dirname, '/../public')));

app.listen(3004, () => console.log('App listening on port 3004...'));