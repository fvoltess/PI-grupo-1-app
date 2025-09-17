var express = require("express");
var router = express.Router();
const indexController = require("../controllers/indexController");

/* GET home page. */
router.get("/", indexController.index);

router.get("/index.ejs", indexController.index);

router.get("/login.ejs", indexController.login);

router.get("/register.ejs", indexController.register);

router.get("/profile.ejs", indexController.profile);

module.exports = router;
