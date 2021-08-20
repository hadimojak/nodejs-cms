const express = require("express");
const router = express.Router();
const homeController = require("app/http/controllers/homeController");

router.get("/", homeController.index);
router.get("/login", homeController.getLogin);
router.get("/register", homeController.getRegister);

module.exports = router;
