"use client";

import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import AppContainer from "./AppContainer";
import AppBar from "./AppBar";
import { useEffect, useState } from "react";
import AppToolbar from "./AppToolbar";
import AppDrawerHeader from "./AppDrawerHeader";
import AppDrawer from "./AppDrawer";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "@/app/lang/en.json";
import es from "@/app/lang/es.json";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      es: { translation: es }
    },
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });


const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});
const lightTheme = createTheme({
  palette: {
    mode: "light",
  },
});

const drawerWidth = 240;

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    const darkMode = localStorage.getItem("darkMode");
    if (darkMode) {
      setDarkMode(JSON.parse(darkMode));
    }
  }, [darkMode]);
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar drawerWidth={drawerWidth} position="fixed" open={open}>
          <AppToolbar
            darkMode={darkMode}
            setDarkMode={setDarkMode}
            open={open}
            setOpen={setOpen}
          ></AppToolbar>
        </AppBar>
        <AppDrawer drawerWidth={drawerWidth} setOpen={setOpen} open={open} />
        <AppContainer drawerWidth={drawerWidth} open={open}>
          <AppDrawerHeader />
          {children}
        </AppContainer>
      </Box>
    </ThemeProvider>
  );
}
