const express = require("express");
const router = express.Router();
const Expenses = require("../models/Expenses");
const { paginatedResults } = require("../Helpers/middleware");

router.get("/", paginatedResults(Expenses), async (req, res) => {
  res.json(res.paginatedResults.results);
});

router.delete("/", async (req, res) => {
  try {
    const deleted = await Expenses.findByIdAndRemove(req.body._id);

    res.status(200).send(deleted);
  } catch (err) {
    res.status(500).json({ message: err });
  }
});

router.put("/", async (req, res) => {
  try {
    const updatedExpense = await Expenses.findByIdAndUpdate(req.body._id, req.body, {
      new: true,
    });
    res.status(200).send(updatedExpense);
  } catch (err) {
    res.status(500).json({ message: err });
  }
});

router.post("/", async (req, res) => {
  const expense = new Expenses({
    name: req.body.name,
    description: req.body.description,
    category: req.body.category,
    date: req.body.date,
  });

  try {
    const data = await expense.save();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ message: err });
  }
});

module.exports = router;
