import { Drawer, Link } from "@mui/material";
import AppDrawerHeader from "./AppDrawerHeader";
import {
  IconButton,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
} from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import PersonIcon from "@mui/icons-material/Person";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import GroupIcon from "@mui/icons-material/Group";
import { useTheme } from "@mui/material/styles";

export default function AppDrawer({
  drawerWidth,
  open,
  setOpen,
}: {
  drawerWidth: number;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) {
  const theme = useTheme();
  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
      variant="persistent"
      anchor="left"
      open={open}
    >
      <AppDrawerHeader>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === "ltr" ? (
            <ChevronLeftIcon />
          ) : (
            <ChevronRightIcon />
          )}
        </IconButton>
      </AppDrawerHeader>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton href="/auth/login" LinkComponent={Link}>
            <ListItemIcon>
              <PersonIcon />
            </ListItemIcon>
            <ListItemText primary="Login form" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton href="/auth/signup" LinkComponent={Link}>
            <ListItemIcon>
              <PersonAddIcon />
            </ListItemIcon>
            <ListItemText primary="Sign up form" />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
      <List>
      <ListItem disablePadding>
          <ListItemButton href="/users" LinkComponent={Link}>
            <ListItemIcon>
              <GroupIcon />
            </ListItemIcon>
            <ListItemText primary="Users" />
          </ListItemButton>
        </ListItem>
      </List>
    </Drawer>
  );
}
