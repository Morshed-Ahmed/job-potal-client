import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import WorkIcon from "@mui/icons-material/Work";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { Stack } from "@mui/material";
import { NavLink, Outlet } from "react-router-dom";
import axios from "axios";

const drawerWidth = 245;

function Dashboard(props) {
  // const [user, setUser] = React.useState();
  // const [admin, setAdmin] = React.useState();

  // React.useEffect(() => {
  //   const token = localStorage.getItem("token");
  //   // console.log(token);

  //   axios
  //     .get("https://job-portal-api.onrender.com/user/me", {
  //       headers: {
  //         authorization: `Bearer ${token}`,
  //       },
  //     })
  //     .then((res) => {
  //       setUser(res.data.data);
  //       setAdmin(res.data.data.role);
  //     })
  //     .catch((error) => console.log(error));
  // }, []);

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      {/* DASHBOARD LOGO */}
      <NavLink style={{ textDecoration: "none" }} to={"/"}>
        <ListItem disablePadding sx={{ mt: 1.5, mb: 1.3 }}>
          <ListItemButton>
            <Stack direction={"row"} spacing={2}>
              <WorkIcon />
              <Typography sx={{ fontSize: "17px", fontWeight: "bold" }}>
                JOB PORTAL
              </Typography>
            </Stack>
          </ListItemButton>
        </ListItem>
      </NavLink>

      <Divider />
      <List>
        {/* LIST ITEM */}
        <NavLink to={"dashboardIndex"}>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <DashboardIcon />
              </ListItemIcon>
              <Typography sx={{ fontSize: "17px", fontWeight: "bold" }}>
                Dashboard
              </Typography>
            </ListItemButton>
          </ListItem>
        </NavLink>
        <NavLink to={"allCandidate"}>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <Typography sx={{ fontSize: "17px", fontWeight: "bold" }}>
                All Candidate
              </Typography>
            </ListItemButton>
          </ListItem>
        </NavLink>
        <NavLink to={"allHiringManager"}>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <Typography sx={{ fontSize: "17px", fontWeight: "bold" }}>
                All Hiring Manager
              </Typography>
            </ListItemButton>
          </ListItem>
        </NavLink>
      </List>
      <Divider />
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Responsive drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashboard;
