const controller = require("./helperController");

class HomeController extends controller {
  index(req, res, next) {
    res.render("home");
  }
  getLogin(req, res, next) {
    res.render("auth/login");
  }
  getRegister(req, res, next) {
    res.render("auth/register");
  }
}

module.exports = new HomeController();
