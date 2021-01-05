const Router = require("express").Router();
const mongoose = require("mongoose");
const config = require("config");

Router.get("/", (req, res) => {
  console.log("hi");
});
Router.post("/", () => {});
Router.put("/", () => {});
Router.delete("/", () => {});

module.exports = Router;
