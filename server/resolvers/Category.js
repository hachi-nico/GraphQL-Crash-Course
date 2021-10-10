const { animals } = require('../mockData');

module.exports = {
  animals: (parent, args, ctx) =>
    animals.filter((a) => a.category === parent.id),
};
