const gql = require('graphql-tag')

const typeDefs = gql`
  # types
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
    # will resolve this field, non-scalar
    dinos: [Dinosaur]
  }

  # Inputs
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
  input UserDinoInput {
    userId:ID
    dinoId:ID
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
    makeAssociation(input:UserDinoInput): User!
  }
`
module.exports = typeDefs
