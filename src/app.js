var express = require("express");
var logger = require("morgan");

var router = require("./routes/index");
var app = express();

//enable cors
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use(logger("dev"));
app.use(express.json({ type: ["applicaton/json"] }));
app.use(express.urlencoded({ extended: false }));
app.use("/", router);

module.exports = app;
