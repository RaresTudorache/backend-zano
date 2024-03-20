const mongoose = require('mongoose');

const menuSchema = new mongoose.Schema({
  name: String,
  items: [
    {
      title: String,
      ingredients: String,
      price: String,
      imgSrc: String,
      tazzLink: String,
    },
  ],
});

const Menu = mongoose.model('Menu', menuSchema);
module.exports = Menu;
