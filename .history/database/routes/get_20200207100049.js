module.exports = (server) => {

    const db = [
        {
        subject: 'My first email',
        content: 'blah',
        receiver: 'Mr Blobby'
        },
        {
            subject: 'deal or no deal',
            content: 'blah',
            receiver: 'Mr Edmonds'
        }
]
    
    // mock a db

    server.get('/', (req, res)=>{
        
    })
}