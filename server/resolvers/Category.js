module.exports = {
  animals: (parent, args, { animals }) =>
    animals.filter((a) => a.category === parent.id),
};
