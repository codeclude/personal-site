import data from './info';
const { ApolloServer, gql } = require('apollo-server-lambda')

const typeDefs = gql`
  type Query {
    hello: String
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
