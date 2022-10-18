import {
  Avatar,
  Container,
  Grid,
  MenuItem,
  MenuList,
  Paper,
} from "@mui/material";
import axios from "axios";
import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import Header from "../Common/Header";

const Profile = () => {
  // const location = useLocation();
  // const data = location.state;
  // console.log(data);

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

  return (
    <div>
      <Header />
      <Container>
        <Grid container sx={{ mt: 3 }} spacing={2}>
          <Grid md={3} xs={12} item>
            <Paper>
              <MenuList>
                {/* <NavLink to="myProfile" state={user}> */}
                <MenuItem sx={{ cursor: "auto" }}>
                  <Avatar
                    sx={{
                      margin: "auto",
                      width: 50,
                      height: 50,
                    }}
                  >
                    {user?.fullName[0]}
                  </Avatar>
                </MenuItem>
                {/* </NavLink> */}
                <NavLink
                  style={{ textDecoration: "none", color: "black" }}
                  to="myProfile"
                  state={user}
                >
                  {/* <ListItemIcon>
                    <Person2OutlinedIcon />
                  </ListItemIcon> */}

                  {/* <ListItemIcon>
                    <Person2OutlinedIcon />
                  </ListItemIcon>
                  <ListItemText>My account</ListItemText> */}
                  <MenuItem>My account</MenuItem>
                </NavLink>

                {admin === "hiring-manager" && (
                  <NavLink
                    style={{ textDecoration: "none", color: "black" }}
                    to="addJob"
                    state={user}
                  >
                    <MenuItem>Job Create</MenuItem>
                  </NavLink>
                )}

                <NavLink
                  style={{ textDecoration: "none", color: "black" }}
                  to="address"
                  state={user}
                >
                  <MenuItem>Address</MenuItem>
                </NavLink>
                <MenuItem>Logout</MenuItem>
              </MenuList>
            </Paper>
            {/* <Paper elevation={2}>
              <Avatar>{user?.fullName[0]}</Avatar>
              <NavLink to="myProfile" state={user}>
                My Profile
              </NavLink>
              <NavLink to="address" state={user}>
                Address
              </NavLink>
            </Paper> */}
          </Grid>
          <Grid md={9} xs={12} item>
            <Outlet />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Profile;
