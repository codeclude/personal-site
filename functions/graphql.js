const data = require('./data');
const { ApolloServer, gql } = require('apollo-server-lambda');
// Schemas

const typeDefs = gql`
  type Query {
    name: String!
    age: String!
    email: String!
    twitter: String!
    github: String!
    experience: [Job]
    repos: [Repo]
    projects: [Project]
  }

  type Job {
    company: String
    title: String!
    started: String
    finished: String
    technologyStack: String
    seniority: String
  }
  
  type Repo {
    name: String
    url: String
    description: String
    language: String
    owner: String
  }
  
  type Project {
    name: String
    description: String
    github: String
    website: String
  }
  
`;

const resolvers = {
  Query: {
    name: () => data.name,
    age: () => data.age,
    email: () => data.email,
    twitter: () => data.twitter,
    github: () => data.github,
    experience: () => data.experience,
    repos: () => data.repos,
    projects: () => data.projects
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers
});

exports.handler = server.createHandler();
