const config = require('./server/config/config');
const app = require('./server/server');
//const logger =

app.listen(config.port, config.host, () => {
  console.info('Server listening on port ', config.port);
}) ;
