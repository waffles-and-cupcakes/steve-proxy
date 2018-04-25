const express = require('express');

const app = express();

app.use('/rooms/:id/', express.static('public'));

app.listen(3000, () => console.log('listening'));