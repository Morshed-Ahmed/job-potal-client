import {
  Avatar,
  Button,
  Divider,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import { Box, Stack } from "@mui/system";
import axios from "axios";
import React from "react";
import EditIcon from "@mui/icons-material/Edit";

const MyProfile = () => {
  const [user, setUser] = React.useState();
  // const [admin, setAdmin] = React.useState();

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
        // setAdmin(res.data.data.role);
      })
      .catch((error) => console.log(error));
  }, []);

  // console.log(admin);
  return (
    <div>
      <Paper sx={{ padding: 3 }} elevation={2}>
        <Stack direction={"row"} justifyContent="space-between">
          <Typography sx={{ fontSize: { md: 25, xs: 20 }, fontWeight: "bold" }}>
            My Profile
          </Typography>
          <Stack direction={"row"} alignItems={"center"}>
            <EditIcon fontSize="small" />
            <span>Edit</span>
          </Stack>
        </Stack>
        <Divider sx={{ my: 0.5 }} />

        <Grid sx={{ mt: 3 }} container spacing={2}>
          <Grid item md={3} xs={12}>
            <Stack direction={"column"} spacing={2}>
              <Avatar
                sx={{ width: 100, height: 100, margin: "auto" }}
                src="/static/images/avatar/1.jpg"
              />
              <Button>Edit Profile</Button>
            </Stack>
          </Grid>
          <Grid item md={9} xs={12}>
            <Stack spacing={2}>
              <Box>
                <Typography variant="body" sx={{ fontWeight: "bold" }}>
                  Full name
                </Typography>
                <Typography variant="h6">{user?.fullName}</Typography>
              </Box>
              <Box>
                <Typography variant="body" sx={{ fontWeight: "bold" }}>
                  Email Address
                </Typography>
                <Typography variant="h6">{user?.email}</Typography>
              </Box>
              <Box>
                <Typography variant="body" sx={{ fontWeight: "bold" }}>
                  Your position
                </Typography>
                <Typography variant="h6" sx={{ textTransform: "capitalize" }}>
                  {user?.role}
                </Typography>
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default MyProfile;
