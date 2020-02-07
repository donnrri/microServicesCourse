const path = require('path')
const basePath = path.join(__dirname, '/packages')

/*
  Normally to make diferent services aware of each other 
  you would create a discovery service
  Here this is not done, its set in env section
*/

module.exports = {
  apps : [
    {
    name: 'API Gateway',
    script: basePath + '/gateway/server.js',
    env: {
      PORT: 4000,
      SERVICE_DB_PORT: 4001
    },
  },
  {
    name: 'API Gateway',
    script: basePath + '/database/server.js',
    env: {
      PORT: 4001,
      SERVICE_API_PORT: 4000
    },
  }
  ],
};
