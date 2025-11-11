const db = require("../database/models");
const productos = db.Product;

const controller = {
  index: (req, res) => {
    productos
      .findAll({
        include: [{ association: "user" }, { association: "comments" }],
      })
      .then((productos) => {
        return res.render("index", { title: "Home", products: productos });
      })
      .catch((error) => {
        return res.render("error", { error: error });
      });
  },
};

module.exports = controller;
