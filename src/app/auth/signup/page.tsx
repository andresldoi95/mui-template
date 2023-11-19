"use client";

import {
  Box,
  Button,
  FormControl,
  FormHelperText,
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

interface SignupFormErrors {
  fullname: string;
  username: string;
  email: string;
  gender: string;
  date_birth: string;
  password: string;
  password_confirmation: string;
}

export default function SignupPage() {
  const { t } = useTranslation();
  const [errors, setErrors] = useState<SignupFormErrors>({
    fullname: "",
    username: "",
    email: "",
    gender: "",
    date_birth: "",
    password: "",
    password_confirmation: "",
  });
  const [form, setForm] = useState<SignupForm>({
    fullname: "",
    username: "",
    email: "",
    gender: "",
    date_birth: "",
    password: "",
    password_confirmation: "",
  });
  function validateForm() {
    let error = true;
    if (form.fullname.length === 0) {
      setErrors((prevState) => ({
        ...prevState,
        fullname: t("errors.fullname_required"),
      }));
      error = false;
    } else setErrors((prevState) => ({ ...prevState, fullname: "" }));
    if (form.username.length === 0) {
      setErrors((prevState) => ({
        ...prevState,
        username: t("errors.username_required"),
      }));
      error = false;
    } else setErrors((prevState) => ({ ...prevState, username: "" }));
    if (form.email.length === 0) {
      setErrors((prevState) => ({
        ...prevState,
        email: t("errors.email_required"),
      }));
      error = false;
    } else setErrors((prevState) => ({ ...prevState, email: "" }));
    if (form.gender.length === 0) {
      setErrors((prevState) => ({
        ...prevState,
        gender: t("errors.gender_required"),
      }));
      error = false;
    } else setErrors((prevState) => ({ ...prevState, gender: "" }));
    if (form.date_birth.length === 0) {
      setErrors((prevState) => ({
        ...prevState,
        date_birth: t("errors.date_birth_required"),
      }));
      error = false;
    } else setErrors((prevState) => ({ ...prevState, date_birth: "" }));
    if (form.password.length === 0) {
      setErrors((prevState) => ({
        ...prevState,
        password: t("errors.password_required"),
      }));
      error = false;
    } else setErrors((prevState) => ({ ...prevState, password: "" }));
    if (form.password_confirmation.length === 0) {
      setErrors((prevState) => ({
        ...prevState,
        password_confirmation: t("errors.password_confirmation_required"),
      }));
      error = false;
    } else setErrors((prevState) => ({ ...prevState, password_confirmation: "" }));
    return error;
  }
  function handleOnSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (validateForm()) {
    }
  }
  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setForm((prevState) => ({ ...prevState, [name]: value }));
  }
  function handleSelectChange(event: SelectChangeEvent<string>) {
    const { name, value } = event.target;
    setForm((prevState) => ({ ...prevState, [name]: value }));
  }
  return (
    <Box onSubmit={handleOnSubmit} component="form" noValidate>
      <Typography paragraph>{t("auth.sign_up_form")}</Typography>
      <Grid container spacing={2}>
        <Grid item md={4} xs={12}>
          <TextField
            id="fullname"
            label={t("users.fullname")}
            required
            fullWidth
            name="fullname"
            value={form.fullname}
            onChange={handleInputChange}
            error={errors.fullname.length > 0}
            helperText={errors.fullname}
          ></TextField>
        </Grid>
        <Grid item md={4} xs={12}>
          <TextField
            id="username"
            label={t("users.username")}
            required
            fullWidth
            name="username"
            value={form.username}
            onChange={handleInputChange}
            error={errors.username.length > 0}
            helperText={errors.username}
          ></TextField>
        </Grid>
        <Grid item md={4} xs={12}>
          <TextField
            id="email"
            label={t("users.email")}
            required
            fullWidth
            name="email"
            value={form.email}
            onChange={handleInputChange}
            error={errors.email.length > 0}
            helperText={errors.email}
          ></TextField>
        </Grid>
        <Grid item md={4} xs={12}>
          <FormControl error={errors.gender.length > 0} fullWidth>
            <InputLabel id="gender">Gender</InputLabel>
            <Select
              labelId="gender"
              label={t("users.gender")}
              required
              name="gender"
              value={form.gender}
              onChange={handleSelectChange}
            >
              <MenuItem value={"M"}>{t('users.male')}</MenuItem>
              <MenuItem value={"F"}>{t('users.female')}</MenuItem>
              <MenuItem value={"O"}>{t('users.other')}</MenuItem>
            </Select>
            {errors.gender.length > 0 && <FormHelperText>{errors.gender}</FormHelperText>}
          </FormControl>
        </Grid>
        <Grid item md={4} xs={12}>
          <TextField
            required
            fullWidth
            id="date_birth"
            label={t("users.date_birth")}
            type="date"
            name="date_birth"
            value={form.date_birth}
            InputLabelProps={{
              shrink: true,
            }}
            onChange={handleInputChange}
            error={errors.date_birth.length > 0}
            helperText={errors.date_birth}
          ></TextField>
        </Grid>
        <Grid item md={4} xs={12}>
          <TextField
            fullWidth
            required
            id="password"
            label={t("users.password")}
            type="password"
            name="password"
            value={form.password}
            onChange={handleInputChange}
            error={errors.password.length > 0}
            helperText={errors.password}
          ></TextField>
        </Grid>
        <Grid item md={4} xs={12}>
          <TextField
            fullWidth
            required
            id="password_confirmation"
            label={t("users.password_confirmation")}
            type="password"
            name="password_confirmation"
            value={form.password_confirmation}
            onChange={handleInputChange}
            error={errors.password_confirmation.length > 0}
            helperText={errors.password_confirmation}
          ></TextField>
        </Grid>
      </Grid>
      <Typography marginTop={1} paragraph>
        {t("auth.have_account")}{" "}
        <Link href="/auth/login">{t("auth.login")}</Link>
      </Typography>
      <Button type="submit" variant="contained">
        {t("auth.sign_up")}
      </Button>
    </Box>
  );
}
