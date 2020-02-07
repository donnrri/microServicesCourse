const { makeExecutableSchema } = require('graphql-tools')
const resolvers = require('./resolvers')

const typeDefs = `
    type Query [Mail]
    mail(subject: String, receiver: Strng)
`
type Mail {
    subject: String
    receiver: String
    content: String
    _id: String

}

module.exports = makeExecutableSchema({typeDefs, resolvers})