const configDev = require('./config.dev')
const configProd = require('./config.prod')

module.exports = pocess.env.NODE_ENV === "production" ? configProd : configDev
