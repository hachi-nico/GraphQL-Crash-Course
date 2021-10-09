const { ApolloServer, gql } = require('apollo-server');
const { animals, categories, mainCards } = require('./mockData');

const typeDefs = gql`
  type MainCard {
    title: String!
    image: String!
  }

  type Animal {
    id: ID!
    image: String!
    title: String!
    rating: Float
    price: String!
    slug: String!
    stock: Int!
    onSale: Boolean
    description: [String!]!
  }

  type Query {
    mainCards: [MainCard]
    animals: [Animal]
    animal(slug: String!): Animal
  }
`;

const resolvers = {
  Query: {
    mainCards: () => mainCards,
    animals: () => animals,
    animal: (parent, args, ctx) => {
      let animal = animals.find((a) => a.slug === args.slug);
      return animal;
    },
  },
};

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
