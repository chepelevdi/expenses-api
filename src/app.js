const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const expensesRoute = require("./routes/expensesRoute");
require("dotenv/config");

const app = express();

app.use(cors());
app.use(bodyParser.json());

//ROUTES
app.use("/expenses", expensesRoute);

mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("connected")
);

mongoose.set("useFindAndModify", false);

app.listen(9000);
