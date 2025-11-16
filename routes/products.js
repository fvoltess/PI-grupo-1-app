var express = require("express");
var router = express.Router();
const productController = require("../controllers/productController");

router.get("/id/:id", productController.getProduct);
router.get("/edit", productController.getEditProduct);
router.get("/add", productController.getAddProduct);
router.post("/add", productController.addProduct);
router.post("/comment/:id", productController.comment);
router.get("/search-results", productController.searchProduct);

module.exports = router;
