const controller = require("./helperController");

class HomeController extends controller {
  message() {
    return "hey bitch";
  }
  index(req, res, next) {
    res.json(this.message());
  }
}

module.exports = new HomeController();
