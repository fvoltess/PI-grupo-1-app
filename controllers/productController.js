// hacer los controllers y exportarlos de productos
const comidas = require('../localData/localData')

const controller = {
  product: function (req, res) {
    let infoProducto = []

    for (let i = 0; i < comidas.productos.length; i++) {
      if (req.params.id == comidas.productos[i].id) {
        infoProducto.push(comidas.productos[i])
      }
    }

    res.render("product", { informacion: infoProducto[0]});
  },
  addProduct: function (req, res) {
    res.render("product-add", { title: "Add Product" });
  },
  editProduct: function (req, res) {
    res.render("product-edit", { title: "Edit Product" });
  },
  searchProduct: function (req, res) {
    res.render("search-results", { title: "Search Product" });
  },
};

module.exports = controller;
