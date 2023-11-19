"use client";

import { Box, Button, TextField, Typography } from "@mui/material";
import Link from "next/link";
import LoginForm from "@/app/interfaces/auth/LoginForm";
import { useState } from "react";
import { useTranslation } from "react-i18next";

interface LoginFormErrors {
  username: string;
  password: string;
}

export default function LoginPage() {
  const {t} = useTranslation();
  const [form, setForm] = useState<LoginForm>({
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState<LoginFormErrors>({
    username: "",
    password: "",
  });
  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setForm((prevState) => ({ ...prevState, [name]: value }));
  }
  function validateForm() {
    let error = true;
    if (form.username.length === 0) {
      setErrors((prevState) => ({ ...prevState, username: t('errors.username_required') }));
      error = false;
    }
    else 
      setErrors((prevState) => ({ ...prevState, username: "" }));
    if (form.password.length === 0) {
      setErrors((prevState) => ({ ...prevState, password: t('errors.password_required') }));
      error = false;
    }
    else 
      setErrors((prevState) => ({ ...prevState, password: "" }));
    return error;
  }
  function handleOnSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if(validateForm()) {
    }
  }
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <Box component="form" noValidate onSubmit={handleOnSubmit}>
        <Typography paragraph>
          {t('auth.login_form')}
        </Typography>
        <TextField
          margin="normal"
          id="username"
          label={t('users.username')}
          required
          fullWidth
          name="username"
          value={form.username}
          onChange={handleInputChange}
          error={errors.username.length > 0}
          helperText={errors.username}
        ></TextField>
        <TextField
          margin="normal"
          required
          id="password"
          name="password"
          label={t('users.password')}
          type="password"
          fullWidth
          value={form.password}
          onChange={handleInputChange}
          error={errors.password.length > 0}
          helperText={errors.password}
        ></TextField>
        <Typography paragraph>
          {t('auth.not_have_account')} <Link href="/auth/signup">{t('auth.sign_up')}</Link>
        </Typography>
        <Button type="submit" variant="contained">
          {t('auth.login')}
        </Button>
      </Box>
    </Box>
  );
}
