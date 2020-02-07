const server = require('express')()
const fetch   = require('fetch')

const PORT = 4000

server.get('/', (req, res) => {
 
})

server.listen(PORT, () => {
    console.log(`Server started on ${PORT}`)
})

