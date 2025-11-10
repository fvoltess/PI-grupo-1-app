const db = require("../database/models");
const products = db.Product;
const op = db.Sequelize.Op;

const controller = {
  product: function (req, res) {
    let id = req.params.id;

    products.findByPk(id, {
      include: [{ association: "comments" }, { association: "user" }],
    })
      .then(function (resultado) {
        if (resultado) {
          // return res.send(resultado)
          return res.render("product", { product: resultado });
        } else {
          return res.render("error");
        }
      })
      .catch(function (error) {
        return res.render("error");
      });
  },
  addProduct: function (req, res) {
    if (!req.session.user) {
      return res.redirect("/users/login");
    }
    res.render("product-add", { title: "Add Product" });
  },
  editProduct: function (req, res) {
    if (!req.session.user) {
      return res.redirect("/users/login");
    }
    res.render("product-edit", { title: "Edit Product" });
  },
  searchProduct: function (req, res) {
    const searchedProducts = [];

    for (let i = 0; i < 4; i++) {
      searchedProducts.push(comidas.productos[i]);
    }

    res.render("search-results", {
      title: "Search Product",
      products: searchedProducts,
    });
  },
};

module.exports = controller;
