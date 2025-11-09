var express = require("express");
var router = express.Router();
const productController = require("../controllers/productController");

router.get("/:id", productController.product);

router.get("/product-add", productController.addProduct);

router.get("/product-edit", productController.editProduct);

router.get("/search-results", productController.searchProduct);

module.exports = router;
