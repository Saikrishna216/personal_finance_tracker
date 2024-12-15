// src/components/ExpensesForm.js
import React, { useState } from "react";
import { Container, TextField, Button, Typography } from "@mui/material";

const ExpensesForm = ({ onAddExpense }) => {
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (category && amount) {
      onAddExpense(category, parseFloat(amount));
      setCategory("");
      setAmount("");
    }
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: "20px" }}>
      <Typography variant="h6">Log Your Expense</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          style={{ marginBottom: "10px" }}
        />
        <TextField
          fullWidth
          label="Amount"
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          style={{ marginBottom: "10px" }}
        />
        <Button variant="contained" color="primary" type="submit">
          Add Expense
        </Button>
      </form>
    </Container>
  );
};

export default ExpensesForm;
