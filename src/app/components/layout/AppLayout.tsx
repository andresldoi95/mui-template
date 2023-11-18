"use client";

import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import AppContainer from "./AppContainer";
import AppBar from "./AppBar";
import { useState } from "react";
import AppToolbar from "./AppToolbar";
import AppDrawerHeader from "./AppDrawerHeader";
import AppDrawer from "./AppDrawer";

const drawerWidth = 240;

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar drawerWidth={drawerWidth} position="fixed" open={open}>
        <AppToolbar open={open} setOpen={setOpen}></AppToolbar>
      </AppBar>
      <AppDrawer drawerWidth={drawerWidth} setOpen={setOpen} open={open} />
      <AppContainer drawerWidth={drawerWidth} open={open}>
        <AppDrawerHeader />
        {children}
      </AppContainer>
    </Box>
  );
}
