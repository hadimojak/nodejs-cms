const controller = require("../helperController");

class IndexController extends controller {
  index(req, res, next) {
    res.json("admin page");
  }
  course(req, res, next) {
    res.json("courses page");
  }
}

module.exports = new IndexController();
