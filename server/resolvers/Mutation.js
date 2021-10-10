const { nanoid } = require('nanoid');

module.exports = {
  addAnimal: (parent, args, { animals }) => {
    let newAnimal = {
      id: nanoid(8),
      ...args,
    };
    animals.push(newAnimal);
    return newAnimal;
  },
  removeAnimal: (parent, { id }, { animals }) => {
    let index = animals.findIndex((a) => a.id === id);
    animals.splice(index, 1);
    return true;
  },
};
