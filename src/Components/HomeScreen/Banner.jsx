// import axios from "axios";
import { Grid, Typography } from "@mui/material";
import { Container, Stack } from "@mui/system";
import React from "react";

const Banner = () => {
  // useEffect(() => {
  //   const token = localStorage.getItem("token");
  //   // console.log(token);

  //   axios
  //     .get("https://job-portal-api-black.vercel.app/user/me", {
  //       headers: {
  //         authorization: `Bearer ${token}`,
  //       },
  //     })
  //     .then((res) => console.log(res.data.data))
  //     .catch((error) => console.log(error));
  // }, []);
  return (
    <div>
      <Container sx={{ mb: 3 }}>
        <Grid sx={{ mt: { md: 10, xs: 3 } }} spacing={4} container>
          <Grid md={6} xs={12} item>
            {/* <Paper elevation={2}> */}
            <Stack spacing={3}>
              <Stack>
                <Typography
                  sx={{ fontSize: { md: "40px", xs: "30px" }, fontWeight: 700 }}
                >
                  The <span style={{ color: "blue" }}> Easiest Way </span> to
                  Get Your New Job
                </Typography>
              </Stack>
              <Stack>
                <Typography variant="body1">
                  Each month, more than 3 million job seekers turn to website in
                  their search for work, making over 140,000
                </Typography>
                <Typography variant="body1">
                  applications every single day
                </Typography>
              </Stack>
              <span>
                Popular Searches: Designer, Web, IOS, Developer, PHP, Senior,
                Engineer
              </span>
            </Stack>
            {/* </Paper> */}
          </Grid>
          <Grid md={6} xs={12} item>
            <img
              style={{ width: "100%" }}
              src="http://wp.alithemes.com/html/jobbox/demos/assets/imgs/page/homepage1/banner1.png"
              alt=""
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Banner;
