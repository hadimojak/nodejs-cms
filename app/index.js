const express = require("express");
const app = express();
const http = require("http");
const path = require("path");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");
// const MongoStore = require("connect-mongo")(session);
const MongoDBStore = require("connect-mongodb-session")(session);
const mongoose = require("mongoose");
const flash = require("connect-flash");
const passport = require("passport");
const { use } = require("passport");
const adminRoute = require("./routes/web/admin");
const url = `mongodb+srv://mojak:0015166031@nodejs-store.tbcbg.mongodb.net/RShop?retryWrites=true&w=majority`;

module.exports = class Application {
  constructor() {
    this.setupExpress();
    this.dbConnection();
    this.setConfig();
    this.setRouters();
  }

  setupExpress() {
    const server = http.createServer(app);
    app.listen(5000, () => {
      console.log("listening on port 5000");
    });
  }

  dbConnection() {
    // mongoose.Promise = global.Promise;
    mongoose
      .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
      .then((result) => {
        console.log("db connected");
      });
  }

  setConfig() {
    app.use(express.static("public"));
    app.set("view engine", "ejs");
    app.set("views", path.resolve("./resource/views"));
    // app.use(bodyParser.json()); //deprecated
    app.use(express.json());
    // app.use(bodyParser.urlencoded({ extended: true })); //deprecated
    app.use(express.urlencoded({ extended: true }));
    // app.use(body());
    app.use(
      session({
        secret: "myShop",
        resave: true,
        saveUninitialized: true,
        store: new MongoDBStore({ uri: url, collection: "sessions" }),
      })
    );
    app.use(cookieParser("myShop123456"));
    app.use(flash());
  }

  setRouters() {
    app.use(require("app/routes/api"));
    app.use(require("app/routes/web/index"));
  }
};
