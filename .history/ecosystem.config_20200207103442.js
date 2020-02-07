const path = require('path')
const basePath = path.join(__dirname, '/packages')
module.exports = {
  apps : [
    {
    name: 'API Gateway',
    script: 'basePath + /gateway/server.js',
    env: {
      PORT: 4000
    },
    env_production: {
      NODE_ENV: 'production'
    }
  },
  {
    name: 'API Gateway',
    script: 'basePath + /database/server.js',
    env: {
      PORT: 4001
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }
  ],

  deploy : {
    production : {
      user : 'node',
      host : '212.83.163.1',
      ref  : 'origin/master',
      repo : 'git@github.com:repo.git',
      path : '/var/www/production',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production'
    }
  }
};
