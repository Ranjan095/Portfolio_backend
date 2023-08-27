/** @format */

let mongoose = require("mongoose");

let connection = mongoose.connect(
  "mongodb+srv://iranjan095:yadav@cluster0.hfauakf.mongodb.net/myPortfolio?retryWrites=true&w=majority"
);

module.exports = { connection };
