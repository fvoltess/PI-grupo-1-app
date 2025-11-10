var express = require("express");
var router = express.Router();
const productController = require("../controllers/productController");

router.get("/id/:id", productController.product);

router.get("/product-add", productController.addProduct);
router.post("/product-add", productController.storeProduct);

router.post("/product-edit/:id", productController.editProduct);
router.get("/search-results", productController.searchProduct);

module.exports = router;
