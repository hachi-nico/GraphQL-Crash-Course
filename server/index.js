const { ApolloServer } = require('apollo-server');
const { ApolloServerPluginLandingPageDisabled } = require('apollo-server-core');
const { animals, categories, mainCards } = require('./mockData');
const typeDefs = require('./schema');
const Query = require('./resolvers/Query');
const Animal = require('./resolvers/Animal');
const Category = require('./resolvers/Category');
const Mutation = require('./resolvers/Mutation');

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
  typeDefs,
  resolvers: { Query, Animal, Category, Mutation },
  context: { animals, categories, mainCards },
  plugins: [ApolloServerPluginLandingPageDisabled()],
});

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
