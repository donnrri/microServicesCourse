const db = require('../mockDb')

module.exports = (server) => {

    server
    .post('/mails', (req, res) => {
        let {subject, receiver, content } = req.body
        if(!subject || !receiver || !content){
            res.send("Error: 400")
        }else{
            let _id = db[db.length -1].id + 1
            db.push({subject, receiver, content, _id})
            res.send("Success: 200")
        }
    })
}