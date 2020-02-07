const path = require('path')
const basePath = path.join(__dirname, '/packages')

/*
  Normally to make diferent services aware of each other 
  you would create a discovery service
  Here this is nt done.
*/

module.exports = {
  apps : [
    {
    name: 'API Gateway',
    script: basePath + '/gateway/server.js',
    env: {
      PORT: 4000
    },
  },
  {
    name: 'API Gateway',
    script: basePath + '/database/server.js',
    env: {
      PORT: 4001
    },
  }
  ],
};
