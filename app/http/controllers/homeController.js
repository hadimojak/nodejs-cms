const controller = require("./helperController");
const { validationResult } = require("express-validator");

class HomeController extends controller {
  index(req, res, next) {
    res.render("home");
  }
  getLogin(req, res, next) {
    res.render("auth/login");
  }
  getRegister(req, res, next) {
    const errors = req.flash("errors");
    res.render("auth/register", { messages: errors });
  }
  postRegister(req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const err = errors.array();
      const messages = err.map((p) => {
        return (p = p.msg);
      });
      req.flash("errors", messages);
      // return res.status(422).render("auth/register", { messages: messages });
      return res.redirect("/register");
    }
    res.json("registered");
  }
}

module.exports = new HomeController();
