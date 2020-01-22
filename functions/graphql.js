const { ApolloServer, gql } = require('apollo-server-lambda')
// Schemas
const jobs = [
  {
    company: "Capgemini",
    title: "Software Engineer",
    started: "2016",
    finished: "2019",
    seniority: ""
  },
  {
    company: "Capgemini",
    title: "Software Engineer",
    started: "2016",
    finished: "2019",
    seniority: ""
  }
];

const data = {
    name: 'Mateusz Korczyński',
    company: 'Deviniti',
    email: 'korczynskimm@gmail.com',
    age: `${new Date().getUTCFullYear()-1994}`,
    twitter: 'https://twitter.com/korczynsk1',
    github: 'https://github.com/korczynsk1/'
};

const typeDefs = gql`
  type Query {
    name: String!
    age: String!
    email: String!
    company: String!
    twitter: String!
    github: String!
    experience: [Job]
  }

  type Job {
    company: String
    title: String!
    started: String
    finished: String
    seniority: String
  }
`;

const resolvers = {
  Query: {
    name: () => data.name,
    age: () => data.age,
    email: () => data.email,
    company: () => data.company,
    twitter: () => data.twitter,
    github: () => data.github,
    experience: () => jobs
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers
});

exports.handler = server.createHandler();
