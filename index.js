/** @format */

let express = require("express");
const { portfolioFeedbackRoute } = require("./routes/portfolioFeedbackRoute");
const { connection } = require("./db");
var cors = require("cors");
let app = express();
let PORT = 9090;
app.use(cors());
app.use(express.json());

app.use("/portfolioFeedback", portfolioFeedbackRoute);

app.listen(`${PORT}`, async () => {
  try {
    await connection;
    console.log("DB has been connected");
  } catch (error) {
    console.log("Somthing went wrong. (DB has not been connected) ");
  }
  console.log(`Port is running at ${PORT}`);
});
