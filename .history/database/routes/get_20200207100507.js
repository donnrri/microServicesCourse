const db = require('../mockDb')


const pingHandler = (_, res) => res.send("UP and running")

module.exports = (server) => {

    
    // mock a db

    server.get('/', (req, res)=>{
        
    })
}