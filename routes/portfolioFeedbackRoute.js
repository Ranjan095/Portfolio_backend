/** @format */

let express = require("express");
const { UserModel } = require("../models/portfolioFeedbackModel");

let portfolioFeedbackRoute = express.Router();

portfolioFeedbackRoute.post("/message/create", async (req, res) => {

// // Create a Date object
// const now = new Date();

// // IST is UTC+5:30

const now = new Date();

// Create a new Date object with the UTC time equivalent to IST
const istTime = new Date(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), now.getUTCHours() + 5, now.getUTCMinutes() + 30, now.getUTCSeconds());

// Format the IST time as a string
const options = { year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', timeZoneName: 'short' };
const createdAt =await istTime.toLocaleString("en-IN", options);

  try {
    let { name, email, message } = req.body;
    // let createdAt = new Date();
    let newFeedBack = await new UserModel({ name, email, message, createdAt });
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
