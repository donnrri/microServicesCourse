const db = require('../mockDb')

module.exports = (server) => {

    server
    .post('/mails', (req, res) => {
        let {subject, receiver, content } = req.body
        if(!subject || !receiver || !content){
            res.send("Error: 400")
        }else{
            db.push({subject, receiver, content})
            res.send("Success: 200")
        }
    })
}