const { makeExecutableSchema } = require('graphql-tools')
const resolvers = require('./resolvers')

const typeDefs = `
    type Query {
        mails: [Mail]
        mail(subject: String, receiver: Strng): Mail
    }
    type Mail {
        subject: String
        receiver: String
        content: String
        _id: String
    }
`

module.exports = makeExecutableSchema({typeDefs, resolvers})