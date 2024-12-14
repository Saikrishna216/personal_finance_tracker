const express = require("express");
const Expense = require("../models/Expense");

const router = express.Router();

// Add expense
router.post("/", async (req, res) => {
    const { category, amount, user } = req.body;

    try {
        const expense = await Expense.create({ category, amount, user });
        res.status(201).json(expense);
    } catch (err) {
        res.status(400).json({ message: "Error adding expense", error: err.message });
    }
});

// Get expenses
router.get("/:userId", async (req, res) => {
    try {
        const expenses = await Expense.find({ user: req.params.userId });
        res.status(200).json(expenses);
    } catch (err) {
        res.status(500).json({ message: "Error fetching expenses", error: err.message });
    }
});

module.exports = router;
