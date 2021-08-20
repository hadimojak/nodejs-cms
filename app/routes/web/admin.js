const express = require("express");
const router = express.Router();
//with helo of app-module-path
const adminController = require("app/http/controllers/admin/adminController");
// const adminController = require("../../http/controllers/admin/adminController");

router.get("/", adminController.index);
router.get("/course", adminController.course);

module.exports = router;
