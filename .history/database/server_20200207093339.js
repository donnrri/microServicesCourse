const server = require('express')()
const bodyParser = require('body-parser')
const { graphqlExpress, graphiqlExpress } = require("apollo-server-express")
const {port} = require('./config')

server.use(bodyParser.json())

server.listen(port, () => {
    console.log(`Server started on ${port}`)
})