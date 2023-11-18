"use client";

import { Box, Button, Link, TextField, Typography } from "@mui/material";
import LoginForm from "@/app/interfaces/auth/LoginForm";
import { useState } from "react";
export default function LoginPage() {
  const [form, setForm] = useState<LoginForm>({
    username: "",
    password: "",
  });
  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setForm((prevState) => ({ ...prevState, [name]: value }));
  }
  return (
    <Box component="form" noValidate>
      <Typography paragraph>
        Please, login by entering your <strong>username</strong> and{" "}
        <strong>password</strong>.
      </Typography>
      <TextField
        margin="normal"
        id="username"
        label="Username"
        required
        fullWidth
        name="username"
        value={form.username}
        onChange={handleInputChange}
      ></TextField>
      <TextField
        margin="normal"
        required
        id="password"
        name="password"
        label="Password"
        type="password"
        fullWidth
        value={form.password}
        onChange={handleInputChange}
      ></TextField>
      <Typography paragraph>
        Do not you have any account? <Link href="/auth/signup">Sign up!</Link>
      </Typography>
      <Button type="submit" variant="contained">
        Login
      </Button>
    </Box>
  );
}