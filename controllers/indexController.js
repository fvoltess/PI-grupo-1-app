const db = require("../database/models");
const productos = db.Product;

const controller = {
  index: (req, res) => {
    productos
      .findAll({
        order: [["createdAt", "DESC"]],
        limit: 40,
        include: { all: true, nested: true },
      })
      .then((productos) => {
        res.render("index", { title: "Express", products: productos });
      });
  },
};

module.exports = controller;
