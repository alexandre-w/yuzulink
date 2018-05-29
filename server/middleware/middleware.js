
const bodyParser = require('body-parser');
const morgan = require('morgan');
const passportSetup = require('./passport-setup');

module.exports = function(app) {
  app.use(morgan('dev'));
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());
};
