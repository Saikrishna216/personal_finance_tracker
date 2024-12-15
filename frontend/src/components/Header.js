// src/components/Header.js
import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { AccountBalanceWallet } from "@mui/icons-material";

const Header = () => {
  return (
    <AppBar position="static" style={{ backgroundColor: "#2e7d32" }}>
      <Toolbar>
        <AccountBalanceWallet style={{ marginRight: "10px" }} />
        <Typography variant="h6">Personal Finance Tracker</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
