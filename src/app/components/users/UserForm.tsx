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
} from "@mui/material";
import { User } from "@/app/interfaces/users/User";

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
        <Box marginTop={1} marginBottom={2}>
          <TextField
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
            label="Full Name"
            fullWidth
            margin="normal"
          />
          <TextField
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            label="Username"
            fullWidth
            margin="normal"
          />
          <TextField
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            label="Email"
            fullWidth
            margin="normal"
          />
          <FormControl margin="normal" fullWidth>
            <InputLabel>Gender</InputLabel>
            <Select value={gender} onChange={(e) => setGender(e.target.value)}>
              <MenuItem value={"M"}>Male</MenuItem>
              <MenuItem value={"F"}>Female</MenuItem>
              <MenuItem value={"O"}>Other</MenuItem>
            </Select>
          </FormControl>
          <TextField
            value={dateBirth}
            onChange={(e) => setDateBirth(e.target.value)}
            label="Date of Birth"
            type="date"
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
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
