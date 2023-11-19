"use client";

import { Box, Button, TextField, Typography } from "@mui/material";
import Link from "next/link";
import LoginForm from "@/app/interfaces/auth/LoginForm";
import { useState } from "react";
import { useTranslation } from "react-i18next";
export default function LoginPage() {
  const {t} = useTranslation();
  const [form, setForm] = useState<LoginForm>({
    username: "",
    password: "",
  });
  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setForm((prevState) => ({ ...prevState, [name]: value }));
  }
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <Box component="form" noValidate>
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
