var express = require("express");
var router = express.Router();
const productController = require("../controllers/productController");

router.get("/product.ejs", productController.product);

router.get("/product-add.ejs", productController.addProduct);

router.get("/product-edit.ejs", productController.editProduct);

router.get("/search-results.ejs", productController.searchProduct);

module.exports = router;
