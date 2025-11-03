const localData = require("../localData/localData");
const db = require("../database/models")

const controller = {
  index: function (req, res) {
    
    res.render("index", { title: "Express", products: localData.productos });
  },
  login: function (req, res) {
    res.render("login", { title: "Login" });
  },
  register: function (req, res) {
    res.render("register", { title: "Register" });
  },
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
};

module.exports = controller;
