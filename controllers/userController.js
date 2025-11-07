const db = require("../database/models");
const bcrypt = require("bcryptjs");

const controller = {
  profile: function (req, res) {
    productosUsuario = [];

    for (let i = 0; i < localData.productos.length; i++) {
      producto = localData.productos[i];

      for (let i = 0; i < producto.comentarios.length; i++) {
        infoComentario = producto.comentarios[i];

        if (infoComentario.nombreUsuario == "Leo Messi") {
          productosUsuario.push(producto);
        }
      }
    }

    res.render("profile", {
      infoUsuario: localData.usuario,
      title: "Profile",
      productosUsuario: productosUsuario,
    });
  },
  getRegister: function (req, res) {
    res.render("register", { title: "Register", errors: null });
  },
  register: function (req, res) {
    if (req.body.password.length < 3) {
      return res.render("register", {
        title: "Register",
        errors: {
          message: "La contraseña debe tener al menos 3 caracteres",
        },
      });
    }

    db.User.findOne({
      where: {
        email: req.body.email,
      },
    }).then((userExists) => {
      if (userExists) {
        return res.render("register", {
          title: "Register",
          errors: {
            message: "Este email ya está registrado",
          },
        });
      }

      if (req.body.password !== req.body.confirmPassword) {
        return res.render("register", {
          title: "Register",
          errors: {
            message: "Las contraseñas no coinciden",
          },
        });
      }

      const hashedPassword = bcrypt.hashSync(req.body.password, 10);

      db.User.create({
        email: req.body.email,
        username: req.body.username,
        birthdate: req.body.birthdate,
        birthcity: req.body.birthcity,
        password: hashedPassword,
      })
        .then(() => {
          return res.redirect("/login");
        })
        .catch((error) => console.log(error));
    });
  },
  getLogin: function (req, res) {
    res.render("login", { title: "Login" });
  },
};

module.exports = controller;
