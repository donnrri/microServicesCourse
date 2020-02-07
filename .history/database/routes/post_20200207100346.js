const db = require('../mockDb')

module.exports = (server) => {

    server.post('/', (req, res)=>{
        res.send("hello")
    })
}