const express = require("express");
const { join } = require("path");
const app = express();
const handlebars = require("express-handlebars");

app.use("/public", express.static(join(__dirname, "public")));

app.engine("handlebars", handlebars());
app.set("views", "./views");
app.set("view engine", "handlebars");

app.get("/", (req, res) => {
  return res.render("home");
});

module.exports = app;
