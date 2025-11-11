const db = require("../database/models");
const products = db.Product;
const comments = db.Comment;
const users = db.User;
const op = db.Sequelize.Op;

const controller = {
  getProduct: (req, res) => {
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
      .then((resultado) => {
        if (resultado) {
          const commentsUsers = [];

          for (let i = 0; i < resultado.comments.length; i++) {
            users
              .findByPk(resultado.comments[i].userId)
              .then((result) => {
                commentsUsers.push(result.dataValues);
              })
              .catch((error) => {
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
      .catch((error) => {
        console.error(error);
        //return res.render("error");
      });
  },
  getAddProduct: (req, res) => {
    if (!req.session.user) {
      return res.redirect("/users/login");
    }
    res.render("product-add", { title: "Add Product" });
  },
  addProduct: (req, res) => {
    products
      .create({
        image: req.body.imagen,
        name: req.body.nombre,
        description: req.body.descripcion,
        userId: req.session.user.id,
      })
      .then(() => {
        res.redirect("/");
      })
      .catch((error) => {
        return res.send(error);
      });
  },
  editProduct: (req, res) => {
    if (!req.session.user) {
      return res.redirect("/users/login");
    }
    res.render("product-edit");
  },
  comment: (req, res) => {
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
      .then(() => {
        res.redirect(`/products/id/${req.params.id}`);
      })
      .catch((error) => {
        res.render("error", { error: error });
      });

    // res.render("product-edit", { title: "Edit Product" });
  },
  searchProduct: (req, res) => {
    products
      .findAll({
        where: [{ name: { [op.like]: "%" + req.query.search + "%" } }],
        include: [{ association: "comments" }, { association: "user" }],
      })
      .then((productos) => {
        //return res.send(productos)

        res.render("search-results", {
          productos: productos,
          search: req.query.search,
        });
      })
      .catch((error) => {
        return res.send("error");
        //res.render("error")
      });
  },
};

module.exports = controller;
