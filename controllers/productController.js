const db = require("../database/models");
const products = db.Product;
const comments = db.Comment;
const users = db.User;
const op = db.Sequelize.Op;

const controller = {
  getProduct: function (req, res) {
    let id = req.params.id;
    products
      .findByPk(id, {
        include: [
          {
            association: "comments",
            include: [{ association: "user" }],
          },
          { association: "user" },
        ],
      })
      .then(function (resultado) {
        if (resultado) {
          const commentsUsers = [];

          for (let i = 0; i < resultado.comments.length; i++) {
            users
              .findByPk(resultado.comments[i].userId)
              .then(function (result) {
                commentsUsers.push(result.dataValues);
              })
              .catch(function (error) {
                res.send("error");
              });
          }
          //return res.send(resultado)
          return res.render("product", {
            product: resultado,
            commentsUsers: commentsUsers,
          });
        } else {
          return res.render("error");
        }
      })
      .catch(function (error) {
        console.error(error);
        //return res.render("error");
      });
  },
  addProduct: function (req, res) {
    return res.send("test");
    if (!req.session.user) {
      return res.redirect("/users/login");
    }
    res.render("product-add", { title: "Add Product" });
  },
  getAddProduct: function (req, res) {
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
  comment: function (req, res) {
    if (!req.session.user) {
      return res.redirect("/users/login");
    }
    console.log("🔍 Usuario en sesión:", req.session.user); 
    console.log("🔍 userId que voy a guardar:", req.session.user.id);

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
        res.render("error", { error: error });
      });

    // res.render("product-edit", { title: "Edit Product" });
  },
  searchProduct: function (req, res) {
    products
      .findAll({
        where: [{ name: { [op.like]: "%" + req.query.search + "%" } }],
        include: [{ association: "comments" }, { association: "user" }],
      })
      .then(function (productos) {
        //return res.send(productos)

        res.render("search-results", {
          productos: productos,
          search: req.query.search,
        });
      })
      .catch(function (error) {
        return res.send("error");
        //res.render("error")
      });
  },
};

module.exports = controller;
