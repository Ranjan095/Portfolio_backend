/** @format */

let express = require("express");
const { UserModel } = require("../models/portfolioFeedbackModel");

let portfolioFeedbackRoute = express.Router();

portfolioFeedbackRoute.post("/message/create", async (req, res) => {
  let { name, email, message } = req.body;
  let createdAt = new Date();
  try {
    let newFeedBack = new UserModel({ name, email, message, createdAt });
    await newFeedBack.save();
    res.status(200).send({ msg: "Feedback has been added" });
  } catch (error) {
    res.status(400).send({ msg: error.message });
  }
});
portfolioFeedbackRoute.get("/message", async (req, res) => {
  let message = await UserModel.find();
  try {
    res.status(200).send(message);
  } catch (error) {
    res.status(400).send({ msg: "portfolioFeedbackRoute" });
  }
});
portfolioFeedbackRoute.delete("/delete/:id", async (req, res) => {
  let { id } = req.params;
  try {
    await UserModel.findByIdAndDelete(id);
    res.status(200).send({ msg: "message has been deleted" });
  } catch (error) {
    res.status(400).send({ msg: error.message });
  }
});

module.exports = { portfolioFeedbackRoute };
