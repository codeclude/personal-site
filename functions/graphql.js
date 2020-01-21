const data = require('./data');
const { ApolloServer, gql } = require('apollo-server-lambda')
// Schemas
import {
  Job,
  Query
} from './types'


const typeDefs = Query.concat(
    Job
)

const resolvers = {
  Query: {
    name: () => data.name,
    age: () => data.age,
    email: () => data.email,
    company: () => data.company,
    twitter: () => data.twitter,
    github: () => data.github,
    jobs: () => data.experience
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers
})

exports.handler = server.createHandler()
