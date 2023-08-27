/** @format */

let mongoose = require("mongoose");

let userSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
  createdAt: { type: String, required: true },
},{versionKey:false,});

let UserModel = mongoose.model("portfolioFeedback", userSchema);

module.exports = { UserModel };
