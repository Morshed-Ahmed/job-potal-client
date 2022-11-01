import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { Stack } from "@mui/system";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
// import theme from "../../Style/customizeStyle";

// const pages = ["Products", "Pricing", "Blog"];
// const settings = ["Profile", "Account", "Dashboard", "Logout"];

const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  // const user = false;

  const [user, setUser] = React.useState();
  const [admin, setAdmin] = React.useState();

  React.useEffect(() => {
    const token = localStorage.getItem("token");
    // console.log(token);

    axios
      .get("https://job-portal-api-black.vercel.app/user/me", {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setUser(res.data.data);
        setAdmin(res.data.data.role);
      })
      .catch((error) => console.log(error));
  }, []);

  // console.log(admin);

  const navigate = useNavigate();

  return (
    <AppBar position="static" color="appBarBg">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* MD SCREEN LOGO */}
          <NavLink to={"/"} style={{ display: "flex", textDecoration: "none" }}>
            <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              // component="a"
              // href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              JobPortal
            </Typography>
          </NavLink>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {/* {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))} */}

              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">hello</Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">hello</Typography>
              </MenuItem>
            </Menu>
          </Box>

          {/* XS SCREEN LOGO */}
          <NavLink
            style={{
              // display: "flex",
              textDecoration: "none",
              // backgroundColor: "blue",
              // width: "100%",
              margin: "auto",
            }}
            to={"/"}
          >
            <Stack
              direction={"row"}
              // sx={{ backgroundColor: "blue", width: "100%" }}
              alignItems={"center"}
            >
              <AdbIcon
                sx={{ display: { xs: "flex", md: "none" }, textAlign: "" }}
              />
              <Typography
                variant="h5"
                noWrap
                // component="a"
                // href=""
                sx={{
                  // mr: 6,

                  display: { xs: "flex", md: "none" },
                  flexGrow: 1,
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                JobPortal
              </Typography>
            </Stack>
          </NavLink>

          {/* MD SCREEN ROUTE */}
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {/* ALL JOB POST ROUTE */}
            <NavLink style={{ textDecoration: "none" }} to={"/allPost"}>
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, display: "block" }}
              >
                Job Post
              </Button>
            </NavLink>

            {/* BLOG ROUTE */}
            <NavLink style={{ textDecoration: "none" }} to={"/blog"}>
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, display: "block" }}
              >
                Blog
              </Button>
            </NavLink>

            {/* ABOUT US ROUTE */}
            <NavLink style={{ textDecoration: "none" }} to={"/about"}>
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, display: "block" }}
              >
                About Us
              </Button>
            </NavLink>

            {/* CONTACT US ROUTE */}
            <NavLink style={{ textDecoration: "none" }} to={"/contact"}>
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, display: "block" }}
              >
                Contact Us
              </Button>
            </NavLink>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Stack
              // spacing={2}
              direction="row"
              // sx={{ display: { xs: "flex", md: "none" } }}
            >
              {user ? (
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar
                      alt={user?.userName}
                      src="/static/images/avatar/2.jpg"
                    />
                  </IconButton>
                </Tooltip>
              ) : (
                <Stack
                  sx={{ display: { md: "flex", xs: "none" } }}
                  spacing={2}
                  direction="row"
                >
                  <NavLink to={"/register"} style={{ textDecoration: "none" }}>
                    <Button variant="outlined" color="primary">
                      Sign up
                    </Button>
                  </NavLink>
                  <NavLink to={"/login"} style={{ textDecoration: "none" }}>
                    <Button variant="contained" color="primary">
                      Sign in
                    </Button>
                  </NavLink>
                </Stack>
              )}
            </Stack>

            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {/* {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))} */}

              <NavLink
                style={{ textDecoration: "none", color: "black" }}
                to="/profile"
                state={user}
              >
                <MenuItem onClick={handleCloseUserMenu}>
                  <Box>
                    <Typography textAlign="center">Profile</Typography>
                  </Box>
                </MenuItem>
              </NavLink>

              {admin === "admin" && (
                <NavLink
                  style={{ textDecoration: "none", color: "black" }}
                  to={"/dashboard"}
                >
                  <MenuItem onClick={handleCloseUserMenu}>
                    <Box>
                      <Typography textAlign="center">Dashboard</Typography>
                    </Box>
                  </MenuItem>
                </NavLink>
              )}

              <MenuItem onClick={handleCloseUserMenu}>
                <Box
                  onClick={() => {
                    localStorage.removeItem("token");
                    navigate("/login");
                  }}
                >
                  <Typography textAlign="center">Log out</Typography>
                </Box>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
