const path = require('path')
const basePath = path.join(__dirname, '/packages')

/*
  Normally to make diferent services aware of each other 
  you would create a discovery service
  Here this is not done, its set in env section

  The watch = true , monitors the servers so if they stop
  a restart is carried out , or changes cause a reload (like nodemon)
*/

module.exports = {
  apps : [
    {
    name: 'API Gateway',
    script: basePath + '/gateway/server.js',
    watch: true,
    env: {
      PORT: 4000,
      SERVICE_DB_PORT: 4001
    },
  },
  {
    name: 'DB',
    script: basePath + '/database/server.js',
    watch: true,
    env: {
      PORT: 4001,
      SERVICE_API_PORT: 4000
    },
  }
  ],
};
