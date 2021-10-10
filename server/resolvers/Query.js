module.exports = {
  mainCards: () => mainCards,
  animals: () => animals,
  animal: (parent, args, { animals }) =>
    animals.find((a) => a.slug === args.slug),
  categories: () => categories,
  category: (parent, args, { categories }) =>
    categories.find((c) => c.slug === args.slug),
};
