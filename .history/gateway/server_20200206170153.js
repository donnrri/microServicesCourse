const server = require('express')()
const bodyParser = require('body-parser')
const { graphqlExpress, graphiqlExpress} = require("apollo-server-express")


const PORT = 4000


server.use(bodyParser.json())

server.get('/', (req, res) => {
 res.send("hello schmuc")
})

server.listen(PORT, () => {
    console.log(`Server started on ${PORT}`)
})