"use client";
import React, { useState } from 'react';
import { Button, IconButton, Container, Box, Typography } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import { User } from '@/app/interfaces/users/User';
import UserForm from '@/app/components/users/UserForm';
import { AppDataTable } from '@/app/components/controls/AppDataTable';

export default function UsersPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [open, setOpen] = useState(false);

  const handleAddUser = (user: User) => {
    setUsers([...users, user]);
    setSelectedUser(null);
    setOpen(false);
  };

  const handleEditUser = (user: User) => {
    setUsers(users.map((u) => (u.fullname === user.fullname ? user : u)));
    setSelectedUser(null);
    setOpen(false);
  };

  const handleDeleteUser = (fullname: string) => {
    setUsers(users.filter((u) => u.fullname !== fullname));
  };

  const columns = [
    { id: 'fullname', label: 'Nombre completo' },
    { id: 'username', label: 'Nombre de usuario' },
    { id: 'email', label: 'Correo electrónico' },
    { id: 'gendre', label: 'Género' },
    { id: 'date_birth', label: 'Fecha de nacimiento' },
  ];

  return (
    <Container>
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Usuarios
        </Typography>
        <Button
          variant="contained"
          color="primary"
          startIcon={<AddIcon />}
          onClick={() => {
            setSelectedUser(null);
            setOpen(true);
          }}
        >
          Agregar
        </Button>
        <UserForm
          user={selectedUser}
          onSave={selectedUser ? handleEditUser : handleAddUser}
          open={open}
          onClose={() => setOpen(false)}
        />
      </Box>
      <AppDataTable
        columns={columns}
        data={users}
        renderActions={(user: User) => (
          <>
            <IconButton
              onClick={() => {
                setSelectedUser(user);
                setOpen(true);
              }}
            >
              <EditIcon />
            </IconButton>
            <IconButton onClick={() => handleDeleteUser(user.fullname)}>
              <DeleteIcon />
            </IconButton>
          </>
        )}
      />
    </Container>
  );
}