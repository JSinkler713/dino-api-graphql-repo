const express = require('express')
const app = express()
const jsonParser = express.json()
const db = require('./models');


const { ApolloServer } = require('apollo-server')
//create a schema
const gql = require('graphql-tag')

//

const typeDefs = require('./typedefs.js') 
// resolvers
const resolvers = require('./resolvers.js')

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context() {
    return db 
  }
})

server.listen({ port: process.env.PORT || 4000}).then(({url})=>console.log(`server on ${url}`))







// Set View Engine (Server Rendered Templates)

//method_override


//require dinosaurController
