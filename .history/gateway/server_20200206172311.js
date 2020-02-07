const server = require('express')()
const bodyParser = require('body-parser')
const { graphqlExpress, graphiqlExpress } = require("apollo-server-express")
const { makeExecutableSchema } = require('graphql-tools')
const {port} = require('./config')


const typeDefs = `
    type Query {hey : String! }
`
const resolvers = {
    Query:{
        hey: () => "Hey There.."
    }
}

const schema = makeExecutableSchema({typeDefs, resolvers})

server.use(bodyParser.json())

server.use('/graphql', graphqlExpress({schema}))
server.use('/gq', graphiqlExpress({endpointURL: '/graphql'}))
server.listen(port, () => {
    console.log(`Server started on ${port}`)
})