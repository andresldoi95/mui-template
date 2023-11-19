import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  Box,
  DialogActions,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  FormHelperText,
} from "@mui/material";
import { User } from "@/app/interfaces/users/User";
import { useTranslation } from "react-i18next";

interface UserFormErrors {
  fullname: string;
  username: string;
  email: string;
  gender: string;
  date_birth: string;
}

interface UserFormProps {
  user: User | null;
  onSave: (user: User) => void;
  open: boolean;
  onClose: () => void;
}

export default function UserForm({
  user,
  onSave,
  open,
  onClose,
}: UserFormProps) {
  const [fullname, setFullname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [dateBirth, setDateBirth] = useState("");
  const {t} = useTranslation();
  const [errors, setErrors] = useState<UserFormErrors>({
    fullname: "",
    username: "",
    email: "",
    gender: "",
    date_birth: ""
  });

  function validateForm() {
    let error = true;
    if (fullname.length === 0) {
      setErrors((prevState) => ({
        ...prevState,
        fullname: t("errors.fullname_required"),
      }));
      error = false;
    } else setErrors((prevState) => ({ ...prevState, fullname: "" }));
    if (username.length === 0) {
      setErrors((prevState) => ({
        ...prevState,
        username: t("errors.username_required"),
      }));
      error = false;
    } else setErrors((prevState) => ({ ...prevState, username: "" }));
    if (email.length === 0) {
      setErrors((prevState) => ({
        ...prevState,
        email: t("errors.email_required"),
      }));
      error = false;
    } else setErrors((prevState) => ({ ...prevState, email: "" }));
    if (gender.length === 0) {
      setErrors((prevState) => ({
        ...prevState,
        gender: t("errors.gender_required"),
      }));
      error = false;
    } else setErrors((prevState) => ({ ...prevState, gender: "" }));
    if (dateBirth.length === 0) {
      setErrors((prevState) => ({
        ...prevState,
        date_birth: t("errors.date_birth_required"),
      }));
      error = false;
    } else setErrors((prevState) => ({ ...prevState, date_birth: "" }));
    return error;
  }
  function handleOnSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (validateForm()) {
    }
  }

  useEffect(() => {
    if (user) {
      setFullname(user.fullname);
      setUsername(user.username);
      setEmail(user.email);
      setGender(user.gender);
      setDateBirth(user.date_birth);
    }
  }, [user]);

  const handleSave = () => {
    if (validateForm())
      onSave({
        fullname,
        username,
        email,
        gender,
        date_birth: dateBirth,
      });
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>{user ? "Edit User" : "Add User"}</DialogTitle>
      <DialogContent>
        <Box onSubmit={handleOnSubmit} marginTop={1} marginBottom={2} component="form" noValidate>
          <TextField
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
            label={t('users.fullname')}
            fullWidth
            margin="normal"
            error={errors.fullname.length > 0}
            helperText={errors.fullname}
          />
          <TextField
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            label={t('users.username')}
            fullWidth
            margin="normal"
            error={errors.username.length > 0}
            helperText={errors.username}
          />
          <TextField
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            label="Email"
            fullWidth
            margin="normal"
            error={errors.email.length > 0}
            helperText={errors.email}
          />
          <FormControl error={errors.gender.length > 0} margin="normal" fullWidth>
            <InputLabel id="gender">Gender</InputLabel>
            <Select required labelId="gender" value={gender} onChange={(e) => setGender(e.target.value)}>
              <MenuItem value={"M"}>{t('users.male')}</MenuItem>
              <MenuItem value={"F"}>{t('users.female')}</MenuItem>
              <MenuItem value={"O"}>{t('users.other')}</MenuItem>
            </Select>
            {errors.gender.length > 0 && <FormHelperText>{errors.gender}</FormHelperText>}
          </FormControl>
          <TextField
            value={dateBirth}
            onChange={(e) => setDateBirth(e.target.value)}
            label={t("users.date_birth")}
            type="date"
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            error={errors.date_birth.length > 0}
            helperText={errors.date_birth}
          />
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="secondary" variant="outlined">
          Cancel
        </Button>
        <Button onClick={handleSave} color="primary" variant="contained">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
}
