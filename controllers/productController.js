const db = require("../database/models");
const products = db.Product;
const comments = db.Comment;
const op = db.Sequelize.Op;

const controller = {
  getProduct: (req, res) => {
    let id = req.params.id;
    products
      .findByPk(id, {
        include: [
          {
            association: "comments",
            // este user es el alias definido en Product.js dentro de la asociación Comment
            include: [{ association: "user" }],
          },
          { association: "user" },
        ],
      })
      .then((resultado) => {
        if (resultado) {
          return res.render("product", {
            product: resultado,
          });
        } else {
          return res.render("error", { error: "Producto no encontrado" });
        }
      })
      .catch((error) => {
        return res.render("error", { error: error });
      });
  },
  getAddProduct: (req, res) => {
    if (!req.session.user) {
      return res.redirect("/users/login");
    }
    return res.render("product-add");
  },
  addProduct: (req, res) => {
    if (!req.session.user) {
      return res.redirect("/users/login");
    }
    products
      .create({
        image: req.body.imagen,
        name: req.body.nombre,
        description: req.body.descripcion,
        userId: req.session.user.id,
      })
      .then(() => {
        return res.redirect("/");
      })
      .catch((error) => {
        return res.send(error);
      });
  },
  getEditProduct: (req, res) => {
    if (!req.session.user) {
      return res.redirect("/users/login");
    }
    return res.render("product-edit");
  },
  comment: (req, res) => {
    if (!req.session.user) {
      return res.redirect("/users/login");
    }

    comments
      .create({
        productId: req.params.id,
        userId: req.session.user.id,
        comment: req.body.comment,
      })
      .then(() => {
        return res.redirect(`/products/id/${req.params.id}`);
      })
      .catch((error) => {
        return res.render("error", { error: error });
      });
  },
  searchProduct: (req, res) => {
    products
      .findAll({
        where: [{ name: { [op.like]: `%${req.query.search}%` } }],
        include: [{ association: "comments" }, { association: "user" }],
      })
      .then((productos) => {
        return res.render("search-results", {
          productos: productos,
          search: req.query.search,
        });
      })
      .catch((error) => {
        return res.render("error", { error: error });
      });
  },
};

module.exports = controller;
