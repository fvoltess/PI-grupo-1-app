const db = require("../database/models");
const bcrypt = require("bcryptjs");
const usuarios = db.User;

const controller = {
  profile: (req, res) => {
    if (!req.session.user) {
      return res.redirect("/users/login");
    }
    usuarios
      .findByPk(req.params.id, {
        include: [{ association: "products" }],
      })
      .then((usuario) => {
        if (usuario) {
          return res.render("profile", {
            usuario: usuario,
          });
        } else {
          return res.render("error", { error: "Usuario no encontrado" });
        }
      })
      .catch((error) => {
        return res.render("error");
      });
  },
  getRegister: (req, res) => {
    if (req.session.user) {
      return res.redirect(`/users/profile/${req.session.user.id}`);
    } else {
      return res.render("register", { errors: null });
    }
  },
  register: (req, res) => {
    if (req.body.password.length < 3) {
      return res.render("register", {
        errors: "La contraseña debe tener al menos 3 caracteres",
      });
    }
    if (req.body.password !== req.body.confirmPassword) {
      return res.render("register", {
        errors: "Las contraseñas no coinciden",
      });
    }

    usuarios
      .findOne({ where: { email: req.body.email } })
      .then((userExists) => {
        if (userExists) {
          return res.render("register", {
            errors: "Este email ya está registrado",
          });
        }

        const hashedPassword = bcrypt.hashSync(req.body.password, 10);

        usuarios
          .create({
            email: req.body.email,
            username: req.body.username,
            profilePicture: req.body.profilePicture,
            birthdate: req.body.birthdate,
            birthplace: req.body.birthplace,
            password: hashedPassword,
          })
          .then(() => {
            return res.redirect("/users/login");
          })
          .catch((error) => {
            return res.render("error", { error: error });
          });
      })
      .catch((error) => {
        return res.render("error", { error: error });
      });
  },
  getLogin: (req, res) => {
    if (req.session.user) {
      return res.redirect(`/users/profile/${req.session.user.id}`);
    } else {
      return res.render("login", { errors: null });
    }
  },
  login: (req, res) => {
    usuarios
      .findOne({ where: { email: req.body.email } })
      .then((user) => {
        if (user) {
          let passwordMatch = bcrypt.compareSync(
            req.body.password,
            user.password
          );
          if (!passwordMatch)
            return res.render("login", {
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
          }

          return res.redirect("/index");
        } else {
          return res.render("login", {
            errors: "El usuario es incorrecto",
          });
        }
      })
      .catch((error) => {
        return res.render("error", { error: error });
      });
  },
  logout: (req, res) => {
    req.session.destroy();
    res.clearCookie("recordame");
    return res.redirect("/users/login");
  },
};

module.exports = controller;
