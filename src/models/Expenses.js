const mongoose = require("mongoose");

const Expenses = mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String },
    category: { type: String, required: true },
    date: { type: String, required: true },
  },
  { autoCreate: true }
);

module.exports = mongoose.model("expenses", Expenses);
