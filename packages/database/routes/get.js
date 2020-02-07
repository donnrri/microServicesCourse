const db = require('../mockDb')


const pingHandler = (_, res) => res.send("UP and running")
const mailsHandler = (_, res) => res.send(db) // would connect db etc
const mailByIdHandler = (req, res) => {
    try{
        
        let mail = db.find(element => {
            element._id === req.params.id
        })

        if(res){
            res.send(mail)
        }else{
            throw 'Error : cannot find email'; 
        }
    } catch (e){
        res.send(e)
    }
}

module.exports = (server) => {

    
    // mock a db

    server
    .get('/', pingHandler)
    .get('/mails', mailsHandler)
    .get('/mails/:id', mailByIdHandler)
}