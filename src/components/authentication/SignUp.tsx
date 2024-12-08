import { Box, CardActions, Link, TextField, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import { Paper } from "@mui/material";
import React, { useState } from "react";

export default function SignUp({
  onUserLogin: handleUserSignUp,
}: {
  onUserLogin: (email: string, password: string) => void;
}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Paper
      sx={{
        width: "400px",
        padding: "16px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
      elevation={0}
    >
      <Typography variant="h2">Welcome to BuildIn</Typography>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          boxSizing: "border-box",
          fontSize: "24px",
          gap: "16px",
          padding: "0px 0px 24px 0px",
        }}
        onSubmit={(e) => {
          e.preventDefault();
          handleUserSignUp(email, password);
        }}
      >
        <TextField
          id="email"
          variant="standard"
          label="Email"
          type="Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <TextField
          id="password"
          variant="standard"
          label="Password"
          type="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <Button
          variant="contained"
          type="submit"
          size="small"
          sx={{
            textTransform: "none",
            fontSize: "18px",
            fontWeight: "bold",
            margin: "16px 0px",
            background: "#2a2d3d",
          }}
        >
          Sign Up
        </Button>
      </form>
      <Divider></Divider>
      <CardActions
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "16px 0px",
          padding: "0px",
        }}
      >
        <span>Already a user?</span>
        <Link
          href="/"
          sx={{
            textDecorationLine: "none",
            fontWeight: "bold",
          }}
        >
          Login
        </Link>
      </CardActions>
    </Paper>
  );
}
