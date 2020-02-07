const mockMails = [
    {
        subject:"This",
        receiver: "John",
        content: "Stuff"
    },
    {
        subject:"Thast",
        receiver: "Jajjn",
        content: "Stuff more"
    },
    {
        subject:"There",
        receiver: "Aggy",
        content: "More stuff"
    }
]


module.exports = {
    Query:{
        mails:() => mockMails,
        mail: (_, args) => mockMails[0]
    },
    Mutation{
        mail: ( _, args) => {
            mockMail[0]= args
            return args
        }
    }
}