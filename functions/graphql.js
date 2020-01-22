const data = require('./data');
const { ApolloServer, gql } = require('apollo-server-lambda')
// Schemas
const Job = require('./Job.graphql');
const Query = require('./Query.graphql');


const typeDefs = gql`
  ${Query}
  ${Job}
`;

const resolvers = {
  Query: {
    name: () => data.name,
    age: () => data.age,
    email: () => data.email,
    company: () => data.company,
    twitter: () => data.twitter,
    github: () => data.github,
    experience: () => data.experience
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers
});

exports.handler = server.createHandler();
