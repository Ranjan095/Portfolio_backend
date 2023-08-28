/** @format */

let express = require("express");
const { portfolioFeedbackRoute } = require("./routes/portfolioFeedbackRoute");
const { connection } = require("./db");
require("dotenv").config();
var cors = require("cors");
let app = express();

app.use(cors());
app.use(express.json());

app.use("/portfolioFeedback", portfolioFeedbackRoute);
app.get("/", async (req, res) => {
  try {
    res.status(200).send({ msg: "Home page" });
  } catch (error) {
    res.status(400).send({ msg: error.message });
  }
});

app.listen(`${process.env.PORT}`, async () => {
  try {
    await connection;
    console.log("DB has been connected");
    console.log(`Port is running at ${process.env.PORT}`);
  } catch (error) {
    console.log("Somthing went wrong. (DB has not been connected) ");
  }
});
