module.exports = (server) => {

    const db = [
        {
        subject: 'My first email',
        content: 'blah',
        receiver: 'Mr Blobby',
        _id: "1"
        },
        {
            subject: 'deal or no deal',
            content: 'blah',
            receiver: 'Mr Edmonds',
            id: "2"
        }
]
    
    // mock a db

    server.get('/', (req, res)=>{
        
    })
}