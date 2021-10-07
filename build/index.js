const buildServer = require('./build-server');
const buildClient = require('./build-client');

buildServer()
  .then(buildClient);
