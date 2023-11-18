"use client"; 
import React, { useState } from 'react';
import { Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle, List, ListItem, ListItemText, ListItemSecondaryAction, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

interface User {
  id: number;
  name: string;
  email: string;
}

const UserForm: React.FC<{ user: User | null, onSave: (user: User) => void, open: boolean, onClose: () => void }> = ({ user, onSave, open, onClose }) => {
  const [name, setName] = useState(user ? user.name : '');
  const [email, setEmail] = useState(user ? user.email : '');

  const handleSubmit = () => {
    onSave({ id: user ? user.id : Date.now(), name, email });
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{user ? 'Editar Usuario' : 'Agregar Usuario'}</DialogTitle>
      <DialogContent>
        <TextField value={name} onChange={e => setName(e.target.value)} label="Nombre" fullWidth />
        <TextField value={email} onChange={e => setEmail(e.target.value)} label="Correo electrónico" fullWidth />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancelar</Button>
        <Button onClick={handleSubmit}>Guardar</Button>
      </DialogActions>
    </Dialog>
  );
};

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
    setUsers(users.map(u => u.id === user.id ? user : u));
    setSelectedUser(null);
    setOpen(false);
  };

  const handleDeleteUser = (id: number) => {
    setUsers(users.filter(u => u.id !== id));
  };

  return (
    <div>
      <Button onClick={() => { setSelectedUser(null); setOpen(true); }}>Agregar usuario</Button>
      <UserForm user={selectedUser} onSave={selectedUser ? handleEditUser : handleAddUser} open={open} onClose={() => setOpen(false)} />
      <List>
        {users.map(user => (
          <ListItem key={user.id}>
            <ListItemText primary={user.name} secondary={user.email} />
            <ListItemSecondaryAction>
              <IconButton edge="end" onClick={() => { setSelectedUser(user); setOpen(true); }}>
                <EditIcon />
              </IconButton>
              <IconButton edge="end" onClick={() => handleDeleteUser(user.id)}>
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </div>
  );
}