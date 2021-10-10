const { animals, categories, mainCards } = require('../mockData');

module.exports = {
  mainCards: () => mainCards,
  animals: () => animals,
  animal: (parent, args, ctx) => animals.find((a) => a.slug === args.slug),
  categories: () => categories,
  category: (parent, args, ctx) => categories.find((c) => c.slug === args.slug),
};
