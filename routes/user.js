var express = require("express");
var router = express.Router();
const userController = require("../controllers/userController");

router.get("/profile/:id", userController.profile);
router.get("/register", userController.getRegister);
router.post("/register", userController.register);
router.get("/login", userController.getLogin);
router.post("/login", userController.login);
router.post("/logout", userController.logout);

module.exports = router;
