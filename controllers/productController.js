// hacer los controllers y exportarlos de productos
const controller = {
  product: function (req, res) {
    res.render("product", { title: "Product" });
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
