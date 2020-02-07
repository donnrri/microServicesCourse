const db = require('../mockDb')

module.exports = (server) => {

    server
    .post('/mails', (req, res) => {
        let {subject, receiver, content } = req.body

        db.push({subject, receiver, content})

        res.send('success')
    })
}