const express = require("express");
const app = express();
const http = require("http");
const path = require("path");
const bodyParser = require("body-parser");

module.exports = class Application {
  constructor() {
    this.setupExpress();
    this.setConfig();
  }

  setupExpress() {
    const server = http.createServer(app);
    server.listen(5000,()=>{console.log("listening on port 5000")})
  }

  setConfig() {
    app.use(express.static("pulic"));
    app.set("view engine", "ejs");
    app.set("views", path.resolve("./resource/views"));
    // app.use(bodyParser.json()); //deprecated
    app.use(express.json());
    // app.use(bodyParser.urlencoded({ extended: true })); //deprecated
    app.use(express.urlencoded({ extended: true }));

    app.get("/", (req, res) => {
      //   res.send("hellow wolrd");
      res.json("hellow world");
    });
  }
};
