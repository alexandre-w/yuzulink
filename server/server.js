const express = require('express');
const app = express();
const api = require('./api/api');
const err = require('./middleware/err');


// Setup the middleware
const middleware = require('./middleware/middleware')(app);

// setup the api
app.use('/api/', api);
app.use(err());


module.exports = app ;
