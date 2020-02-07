const server = require('express')()
const bodyParser = require('body-parser')
const {port} = require('./config')

server.use(bodyParser.json())

server.listen(port, () => {
    console.log(`Server started on ${port}`)
})