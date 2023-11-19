import { Box, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Dispatch, SetStateAction } from "react";
import DarkMode from "@mui/icons-material/DarkMode"; 
import LightMode from "@mui/icons-material/LightMode";

interface AppToolbarProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  darkMode: boolean;
  setDarkMode: Dispatch<SetStateAction<boolean>>;
}

export default function AppToolbar({
  open,
  setOpen,
  darkMode,
  setDarkMode,
}: AppToolbarProps) {
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleThemeChange = () => {
    localStorage.setItem("darkMode", JSON.stringify(!darkMode));
    setDarkMode(!darkMode);
  };
  return (
    <Toolbar>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        onClick={handleDrawerOpen}
        edge="start"
        sx={{ mr: 2, ...(open && { display: "none" }) }}
      >
        <MenuIcon />
      </IconButton>
      <Typography variant="h6" noWrap component="div">
        MUI Template
      </Typography>
      <Box sx={{ flexGrow: 1 }} />
      <IconButton color="inherit" onClick={handleThemeChange}>
        {darkMode? <LightMode /> : <DarkMode />}
      </IconButton>
    </Toolbar>
  );
}
