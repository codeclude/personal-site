const data = require('./info');
const { ApolloServer, gql } = require('apollo-server-lambda')

const typeDefs = gql`
  type BasicInfo {
    name: String
    age: String
    email: String
    company: String
  }

  type Query {
    name: String
    age: String
    email: String
    company: String
    twitter: String
    github: String
  }
`

const resolvers = {
  Query: {
    name: () => data.name,
    age: () => data.age,
    email: () => data.email,
    company: () => data.company,
    twitter: () => data.twitter,
    github: () => data.github
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers
})

exports.handler = server.createHandler()
