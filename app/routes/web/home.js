const express = require("express");
const router = express.Router();
const homeController = require("app/http/controllers/homeController");
const { body } = require("express-validator");

router.get("/", homeController.index);
router.get("/login", homeController.getLogin);
router.get("/register", homeController.getRegister);
router.post(
  "/register",
  [
    body("name", "فیلد نام نمی تواند خالی بماند").notEmpty(),
    body("name", "فیلد نام نمی تواند کمتر از 5 کاراکتر باشد").isLength({
      min: 5,
    }),
    body("email", "فیلد ایمیل نمی تواند خالی بماند").notEmpty(),
    body("email", "باید ایمیل صحیح وارد نمایید").isEmail(),
    body("password", "فیلد پسورد نمی تواند خالی بماند").notEmpty(),
    body("password", "فیلد پسورد نمی تواند کمتر از 8 کاراکتر باشد").isLength({
      min: 8,
    }),
  ],
  homeController.postRegister
);

module.exports = router;
