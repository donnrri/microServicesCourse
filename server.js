const server = require('express')()

const PORT = 4000
server.get('/', (req, res) => {
    res.send('Hello')
})

server.listen(PORT, () => {
    console.log(`Server started on ${PORT}`)
})

