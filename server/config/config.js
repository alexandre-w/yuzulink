const _ = require('lodash');

const config = {
  dev: 'development',
  test: 'testing',
  prod: 'production',
  port: process.env.PORT || 3000
};

// Setting config.env
process.env.NODE_ENV = process.env.NODE_ENV || config.dev;
config.env = process.env.NODE_ENV;

let envConfig = {} ;

// Try/Catch if the file doesn't exist
try {
  envConfig = require('./' + config.env);
  // To be sure that require() got something back
  envConfig = envConfig || {};
} catch(e) {
  envConfig = {};
}


module.exports = _.merge(config, envConfig);
