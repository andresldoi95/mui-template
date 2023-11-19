"use client";

import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
} from "@mui/material";
import SignupForm from "@/app/interfaces/auth/SignupForm";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import Link from "next/link";

export default function SignupPage() {
  const {t} = useTranslation();
  const [form, setForm] = useState<SignupForm>({
    fullname: "",
    username: "",
    email: "",
    gender: "M",
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
        {t('auth.sign_up_form')}
      </Typography>
      <Grid container spacing={2}>
        <Grid item md={4} xs={12}>
          <TextField
            id="fullname"
            label={t('users.fullname')}
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
            label={t('users.username')}
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
            label={t('users.email')}
            required
            fullWidth
            name="email"
            value={form.email}
            onChange={handleInputChange}
          ></TextField>
        </Grid>
        <Grid item md={4} xs={12}>
          <FormControl fullWidth>
            <InputLabel id="gender">Gender</InputLabel>
            <Select
              labelId="gender"
              id="demo-simple-select"
              label={t('users.gender')}
              required
              name="gender"
              value={form.gender}
              onChange={handleSelectChange}
            >
              <MenuItem value="M">Male</MenuItem>
              <MenuItem value="F">Female</MenuItem>
              <MenuItem value="O">Other</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item md={4} xs={12}>
          <TextField
            required
            fullWidth
            id="date_birth"
            label={t('users.date_birth')}
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
            label={t('users.password')}
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
            label={t('users.password_confirmation')}
            type="password"
            name="password_confirmation"
            value={form.password_confirmation}
            onChange={handleInputChange}
          ></TextField>
        </Grid>
      </Grid>
      <Typography marginTop={1} paragraph>
      {t('auth.have_account')} <Link href="/auth/login">{t('auth.login')}</Link>
      </Typography>
      <Button type="submit" variant="contained">
        {t('auth.sign_up')}
      </Button>
    </Box>
  );
}
