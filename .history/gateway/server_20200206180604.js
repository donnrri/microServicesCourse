const server = require('express')()
const bodyParser = require('body-parser')
const { graphqlExpress, graphiqlExpress } = require("apollo-server-express")
const {port} = require('./config')
const schema = require('./data/schema')

server.use(bodyParser.json())

server.use('/graphql', graphqlExpress({schema}))
server.use('/gq', graphiqlExpress({endpointURL: '/graphql'}))
server.listen(port, () => {
    console.log(`Server started on ${port}`)
})