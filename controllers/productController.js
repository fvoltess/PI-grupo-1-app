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
    let search = req.query.search;

    products.findAll({
      where: [{name: {[op.like]: "%" + search + "%"}}]
    })
      .then(function(resultados){
        res.send(resultados)
        // res.render("search-results", {productos: resultados})
      })
      .catch(function(error){
        res.send(error)
        // res.render("error")
      })
  },
};

module.exports = controller;
