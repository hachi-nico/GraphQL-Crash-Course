module.exports = {
  mainCards: (parent, args, { mainCards }) => mainCards,
  animals: (parent, args, { animals }) => animals,
  animal: (parent, args, { animals }) =>
    animals.find((a) => a.slug === args.slug),
  categories: (parent, args, { categories }) => categories,
  category: (parent, args, { categories }) =>
    categories.find((c) => c.slug === args.slug),
};
