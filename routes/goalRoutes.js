const express = require("express");
const SavingsGoal = require("../models/SavingsGoal");

const router = express.Router();

// Add savings goal
router.post("/", async (req, res) => {
    const { targetAmount, currentAmount, deadline, user } = req.body;

    try {
        const goal = await SavingsGoal.create({ targetAmount, currentAmount, deadline, user });
        res.status(201).json(goal);
    } catch (err) {
        res.status(400).json({ message: "Error setting savings goal", error: err.message });
    }
});

// Get savings goal
router.get("/:userId", async (req, res) => {
    try {
        const goal = await SavingsGoal.findOne({ user: req.params.userId });
        res.status(200).json(goal);
    } catch (err) {
        res.status(500).json({ message: "Error fetching savings goal", error: err.message });
    }
});

module.exports = router;
