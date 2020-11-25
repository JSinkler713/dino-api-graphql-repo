const gql = require('graphql-tag')

const typeDefs = gql`
  type Dinosaur {
    id: ID!
    name: String!
    type: String!
    createdAt: String!
    updatedAt: String!
  }
  type User {
    id:ID!
    name:String
    dinos: [Dinosaur]
  }
  input UserId {
    id: ID
  }

  input UserInput {
    name: String
  }
  input DinoInput {
    name: String!
    type: String!
  }

  # Query type
  type Query {
    allDinos: [Dinosaur]
    aDino(input:DinoInput): Dinosaur!
    aUser(input:UserId): User
  }


  # Mutation type
  type Mutation {
    makeDino(input:DinoInput): Dinosaur!
    makeUser(input:UserInput): User!
  }
`
module.exports = typeDefs
