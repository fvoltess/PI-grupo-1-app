const db = require("../database/models");
const productos = db.Product;

const controller = {
  index: (req, res) => {
    productos
      .findAll({
        include: [{ association: "user" }, { association: "comments" }],
      })
      .then((productos) => {
        res.render("index", { title: "Express", products: productos });
      })
      .catch((error) => {
        return res.render("error", { error: error });
      });
  },
};

module.exports = controller;
