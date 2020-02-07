const server = require('express')()
const bodyParser = require('body-parser')
const {port} = require('./config')

server.use(bodyParser.json())

require('./routes/get')(server)

server.listen(port, () => {
    console.log(`Server started on ${port}`)
})