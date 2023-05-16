const express = require("express");
const path = require("path");
const logger = require("morgan");
require("dotenv").config();
require("./config/database");
// const jwt = require("jsonwebtoken");

//define routes

const app = express();
const port = process.env.PORT || 3000;

app.use(logger("dev"));
app.use(express.json());
app.use(express.static(path.join(__dirname, "dist")));
// app.use(require("./config/checkToken"));

//use routes

app.get("/api", (req, res) => {
  res.send("Hi!");
});

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
