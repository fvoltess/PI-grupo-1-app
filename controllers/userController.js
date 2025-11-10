const db = require("../database/models");
const bcrypt = require("bcryptjs");
const usuarios = db.User;
const productos = db.Product;

const controller = {
  profile: function (req, res) {
    if (!req.session.user) {
      return res.redirect("/users/login");
    }
    usuarios
      .findByPk(req.params.id, { include: [{ association: "products" }] })
      .then((usuario) => {
        if (usuario) {
          console.log(usuario);
          // res.send(usuario);
          return res.render("profile", {
            title: "Profile",
            usuario: usuario,
          });
        }
      });
    // productos
    //   .findAll({ where: { userId: req.params.id } })
    //   .then((productos) => {
    //     if (productos.length === 0) {
    //       return res.render("profile", {
    //         title: "Profile",
    //         productosUsuario: null,
    //       });
    //     }
    //     return res.render("profile", {
    //       title: "Profile",
    //       productosUsuario: productos,
    //     });
    //   })
    //   .catch((error) => console.log(error));
  },
  getRegister: function (req, res) {
    if (req.session.user) {
      return res.redirect("/users/profile");
    }
    res.render("register", { title: "Register", errors: null });
  },
  register: function (req, res) {
    if (req.body.password.length < 3) {
      return res.render("register", {
        title: "Register",
        errors: "La contraseña debe tener al menos 3 caracteres",
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
          errors: "Este email ya está registrado",
        });
      }

      if (req.body.password !== req.body.confirmPassword) {
        return res.render("register", {
          title: "Register",
          errors: "Las contraseñas no coinciden",
        });
      }

      const hashedPassword = bcrypt.hashSync(req.body.password, 10);

      db.User.create({
        email: req.body.email,
        username: req.body.username,
        profilePicture: req.body.profilePicture,
        birthdate: req.body.birthdate,
        birthcity: req.body.birthcity,
        password: hashedPassword,
      })
        .then(() => {
          return res.redirect("/users/login");
        })
        .catch((error) => console.log(error));
    });
  },
  getLogin: function (req, res) {
    if (req.session.user) {
      return res.redirect("/users/profile");
    }
    res.render("login", { title: "Login", errors: null });
  },
  login: function (req, res) {
    db.User.findOne({
      where: { email: req.body.email },
    })
      .then((user) => {
        if (user) {
          if (!bcrypt.compareSync(req.body.password, user.password))
            return res.render("login", {
              title: "Login",
              errors: "La contraseña ingresada es incorrecta",
            });
          let profilePic = user.profilePicture;

          if (!profilePic) {
            profilePic = "fallback.png";
          }

          req.session.user = {
            id: user.id,
            username: user.username,
            email: user.email,
            profilePicture: profilePic,
          };

          if (req.body.remember) {
            res.cookie("recordame", req.session.user, {
              maxAge: 10 * 60 * 60 * 1000,
            });
            console.log("Cookie creada:", res.cookie);
          }

          return res.redirect("/index");
        }

        return res.render("login", {
          title: "Login",
          errors: "El usuario es incorrecto",
        });
      })
      .catch((error) => console.error(error));
  },
  logout: function (req, res) {
    req.session.destroy();
    res.clearCookie("recordame");
    res.redirect("/users/login");
  },
};

module.exports = controller;
