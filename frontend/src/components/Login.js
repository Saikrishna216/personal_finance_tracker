// src/components/Login.js
import React from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { Button, Container, Typography } from "@mui/material";
import { auth } from "../firebase";

const Login = () => {
  const handleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      console.log("User signed in:", result.user);
    } catch (error) {
      console.error("Error during sign-in:", error);
    }
  };

  return (
    <Container maxWidth="sm" style={{ textAlign: "center", marginTop: "100px" }}>
      <Typography variant="h4" gutterBottom>
        Welcome to Personal Finance Tracker
      </Typography>
      <Button variant="contained" color="primary" onClick={handleLogin}>
        Sign In with Google
      </Button>
    </Container>
  );
};

export default Login;
