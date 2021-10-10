const { nanoid } = require('nanoid');

module.exports = {
  addAnimal: (
    parent,
    { image, title, rating, price, slug, stock, onSale, description, category },
    { animals }
  ) => {
    let newAnimal = {
      id: nanoid(8),
      image,
      title,
      rating,
      price,
      slug,
      stock,
      onSale,
      description,
      category,
    };
    animals.push(newAnimal);
    return newAnimal;
  },
};
