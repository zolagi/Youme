const Router = require("express").Router();
const mongoose = require("mongoose");
const config = require("config");

// user_models
const user_models = require("../models/user_models");

// Validation
const new_user_models_Validation = require("../models/Validation/new_user_models_Validation");

// Router

// get user data
Router.get("/", (req, res) => {
  console.log("hi");
  throw { error: "Exception message", router: "user" };
});

// make new usere
Router.post("/", async (req, res) => {
  const data = req.body;

  // Validation error
  const error = new_user_models_Validation(data);
  if (error) {
    res.status(400).json({ error });
    throw { error: error, router: "user" };
  }

  // all good
  const to_save = new user_models(data);
  const result = await to_save.save();
  if (to_save === result) {
    res.status(201).json(result);
  }
});

// edit user data
Router.put("/", () => {});

// delete user data
Router.delete("/", () => {});

module.exports = Router;
