const db = require("../database/models");
const products = db.Product;
const comments = db.Comment;
const op = db.Sequelize.Op;

const controller = {
  product: function (req, res) {
    let id = req.params.id;

    products
      .findByPk(id, {
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
    return res.send("test");
    if (!req.session.user) {
      return res.redirect("/users/login");
    }
    res.render("product-add", { title: "Add Product" });
  },
  storeProduct: function (req, res) {
    products
      .create({
        image: req.body.imagen,
        name: req.body.nombre,
        description: req.body.descripcion,
      })
      .then(function () {
        res.redirect("/");
      })
      .catch(function (error) {
        res.render("error");
      });
  },
  editProduct: function (req, res) {
    if (!req.session.user) {
      return res.redirect("/users/login");
    }
    comments
      .create({
        productId: req.params.id,
        userId: req.session.user.id,
        comment: req.body.comment,
      })
      .then(function () {
        res.redirect(`/products/id/${req.params.id}`);
      })
      .catch(function (error) {
        res.render("error");
      });

    // res.render("product-edit", { title: "Edit Product" });
  },
  searchProduct: function (req, res) {
    products
      .findAll({
        where: [{ name: { [op.like]: "%" + req.query.search + "%" } }],
        include: [{ all: true, nested: true }],
      })
      .then(function (productos) {
        //return res.send(productos)
        res.render("search-results", { productos: productos });
      })
      .catch(function (error) {
        return res.send("error");
        //res.render("error")
      });
  },
};

module.exports = controller;
