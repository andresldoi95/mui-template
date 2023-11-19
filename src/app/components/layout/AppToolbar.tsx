import { Box, IconButton, MenuItem, Select, SelectChangeEvent, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import DarkMode from "@mui/icons-material/DarkMode"; 
import LightMode from "@mui/icons-material/LightMode";
import { useTranslation } from "react-i18next";
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
  const { i18n } = useTranslation();
  const [lang, setLang] = useState(i18n.language);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleThemeChange = () => {
    localStorage.setItem("darkMode", JSON.stringify(!darkMode));
    setDarkMode(!darkMode);
  };
  const handleLangChange = (event: SelectChangeEvent<string>) => {
    const newLang = event.target.value;
    setLang(newLang);
    i18n.changeLanguage(newLang);
    localStorage.setItem("lang", newLang);
  };
  useEffect(() => { 
    const lang = localStorage.getItem("lang");
    if (lang) {
      setLang(lang);
      i18n.changeLanguage(lang);
    }
  }, [lang, i18n]);
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
      <Select value={lang} onChange={handleLangChange}>
        <MenuItem value="en">English</MenuItem>
        <MenuItem value="es">Español</MenuItem>
      </Select>
    </Toolbar>
  );
}
