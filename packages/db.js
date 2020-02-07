const server = require('express')()

const PORT = 5000

const data=  [
    {title: 'AAAA', content: 'blah b;ah'},
    {title: 'BBBBB', content: 'blah b;ah'},,
    {title: 'CcCcC', content: 'blah b;ah'},
    {title: 'DDDDD', content: 'blah b;ah'},
]


server.get('/db', (req, res) => {

        res.send(data)
})


server.listen(PORT,  () => {
    console.log('db server runing on port 5000')
})


