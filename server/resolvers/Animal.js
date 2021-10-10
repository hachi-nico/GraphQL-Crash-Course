const { categories } = require('../mockData');

module.exports = {
  category: (parent, args, ctx) =>
    categories.find((c) => c.id === parent.category),
};
