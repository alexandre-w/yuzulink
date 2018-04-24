const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs')
const path = require('path')
const morgan = require('morgan');
const app = express();
const api = require('./api/api');
const err = require('./middleware/err');


app.use(morgan('dev'));
app.use(express.static('client'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// setup the logger
// var accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), {flags: 'a'});
// app.use(morgan('combined', {stream: accessLogStream}));

// setup the api
app.use('/api/', api);
app.use(err());


module.exports = app ;
