import { Box, CardActions, Link, TextField, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import { Paper } from "@mui/material";
import React, { useState } from "react";

export default function Login({
  onUserLogin: handleUserLogin,
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
      <Typography variant="h2">Welcome Back!</Typography>
      <p>
        Login to reconnect with your community, share your insights, and
        collaborate with amazing minds today!
      </p>
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
          handleUserLogin(email, password);
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
          Log In
        </Button>
        <Link
          style={{
            textTransform: "none",
            textDecoration: "none",
            fontSize: "16px",
            textAlign: "center",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Forgot password?
        </Link>
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
        <span>Don't have an account?</span>
        <Link
          href="#"
          sx={{
            textDecorationLine: "none",
            fontWeight: "bold",
          }}
        >
          Create new account
        </Link>
      </CardActions>
    </Paper>
  );
}
