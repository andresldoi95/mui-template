"use client";

import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  Link,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
} from "@mui/material";
import SignupForm from "@/app/interfaces/auth/SignupForm";
import { useState } from "react";

export default function SignupPage() {
  const [form, setForm] = useState<SignupForm>({
    fullname: "",
    username: "",
    email: "",
    gendre: "M",
    date_birth: "",
    password: "",
    password_confirmation: "",
  });
  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setForm((prevState) => ({ ...prevState, [name]: value }));
  }
  function handleSelectChange(event: SelectChangeEvent<string>) {
    const { name, value } = event.target;
    setForm((prevState) => ({ ...prevState, [name]: value }));
  }
  return (
    <Box component="form" noValidate>
      <Typography paragraph>
        Please, fill the form and <strong>sign up</strong>.
      </Typography>
      <Grid container spacing={2}>
        <Grid item md={4} xs={12}>
          <TextField
            id="fullname"
            label="Full Name"
            required
            fullWidth
            name="fullname"
            value={form.fullname}
            onChange={handleInputChange}
          ></TextField>
        </Grid>
        <Grid item md={4} xs={12}>
          <TextField
            id="fullname"
            label="Username"
            required
            fullWidth
            name="username"
            value={form.username}
            onChange={handleInputChange}
          ></TextField>
        </Grid>
        <Grid item md={4} xs={12}>
          <TextField
            id="email"
            label="Email"
            required
            fullWidth
            name="email"
            value={form.email}
            onChange={handleInputChange}
          ></TextField>
        </Grid>
        <Grid item md={4} xs={12}>
          <FormControl fullWidth>
            <InputLabel id="gendre">Gendre</InputLabel>
            <Select
              labelId="gendre"
              id="demo-simple-select"
              label="Gendre"
              required
              name="gendre"
              value={form.gendre}
              onChange={handleSelectChange}
            >
              <MenuItem value="M">Male</MenuItem>
              <MenuItem value="F">Female</MenuItem>
              <MenuItem value="O">Other</MenuItem>
              <MenuItem value="P">Prefer not to say</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item md={4} xs={12}>
          <TextField
            required
            fullWidth
            id="date_birth"
            label="Date of birth"
            type="date"
            name="date_birth"
            value={form.date_birth}
            InputLabelProps={{
              shrink: true,
            }}
            onChange={handleInputChange}
          ></TextField>
        </Grid>
        <Grid item md={4} xs={12}>
          <TextField
            fullWidth
            required
            id="password"
            label="Password"
            type="password"
            name="password"
            value={form.password}
            onChange={handleInputChange}
          ></TextField>
        </Grid>
        <Grid item md={4} xs={12}>
          <TextField
            fullWidth
            required
            id="password_confirmation"
            label="Password confirmation"
            type="password"
            name="password_confirmation"
            value={form.password_confirmation}
            onChange={handleInputChange}
          ></TextField>
        </Grid>
      </Grid>
      <Typography marginTop={1} paragraph>
        Do you have an account? <Link href="/auth/login">Login!</Link>
      </Typography>
      <Button type="submit" variant="contained">
        Sign up
      </Button>
    </Box>
  );
}
