const { ApolloServer } = require('apollo-server')
const typeDef = require('./typeDef')
const resolver = require('./resolver')

const mainServer = () =>{
const typeDefs = typeDef
const resolvers = resolver


const server = new ApolloServer({typeDefs, resolvers})

server.listen().then(({url})=>{console.log(`server listening @ ${url} `)})

} 

mainServer();