module.exports = {
  category: (parent, args, { categories }) =>
    categories.find((c) => c.id === parent.category),
};
