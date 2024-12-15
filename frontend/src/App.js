// src/App.js
import React, { useState } from "react";
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import Login from "./components/Login";
import SpendingChart from "./components/SpendingChart";
import ExpensesForm from "./components/ExpensesForm";

const App = () => {
  const [expenses, setExpenses] = useState([]);

  // Function to add a new expense
  const handleAddExpense = (category, amount) => {
    setExpenses([...expenses, { category, amount }]);
  };

  return (
    <div className="App">
      {/* Header Component */}
      <Header />

      {/* Login Component */}
      <Login />

      {/* Form to Add Expenses */}
      <ExpensesForm onAddExpense={handleAddExpense} />

      {/* Chart to Display Spending */}
      <SpendingChart data={expenses} />

      {/* Default React Boilerplate for Reference */}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default App;
