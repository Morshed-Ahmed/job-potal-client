import { Grid, Typography } from "@mui/material";
import { Container, Stack } from "@mui/system";
import React from "react";
import Footer from "../Common/Footer";
import Header from "../Common/Header";

const AboutUs = () => {
  return (
    <div>
      <Header />
      <Container sx={{ mt: 10 }}>
        <Stack sx={{ mb: 4, textAlign: "center" }}>
          <Typography sx={{ fontSize: { md: 35, xs: 25 } }}>
            About Us
          </Typography>
          <Typography>Get the latest news, updates and tips</Typography>
        </Stack>
        <Stack sx={{ backgroundColor: "#F2F6FD", borderRadius: 2 }}>
          <Grid p={2} my={4} spacing={3} container>
            <Grid md={3} xs={12} item>
              <Stack spacing={2}>
                <Typography sx={{ fontWeight: 700 }}>
                  JobPortal Corporation
                </Typography>
                <Typography>
                  205 North Michigan Avenue, Suite 810 Chicago, 60601, USA
                </Typography>
              </Stack>
            </Grid>
            <Grid md={3} xs={12} item>
              <Stack spacing={2}>
                <Stack spacing={1}>
                  <Typography sx={{ fontWeight: 700 }}> London</Typography>
                  <Typography>
                    2118 Thornridge Cir. Syracuse, Connecticut 35624
                  </Typography>
                </Stack>
                <Stack spacing={1}>
                  <Typography sx={{ fontWeight: 700 }}> New York</Typography>
                  <Typography>
                    4517 Washington Ave. Manchester, Kentucky 39495
                  </Typography>
                </Stack>
              </Stack>
            </Grid>
            <Grid md={3} xs={12} item>
              <Stack spacing={2}>
                <Stack spacing={1}>
                  <Typography sx={{ fontWeight: 700 }}> Chicago</Typography>
                  <Typography>
                    3891 Ranchview Dr. Richardson, California 62639
                  </Typography>
                </Stack>
                <Stack spacing={1}>
                  <Typography sx={{ fontWeight: 700 }}>
                    {" "}
                    San Francisco
                  </Typography>
                  <Typography>
                    4140 Parker Rd. Allentown, New Mexico 31134
                  </Typography>
                </Stack>
              </Stack>
            </Grid>
            <Grid md={3} xs={12} item>
              <Stack spacing={2}>
                <Stack spacing={1}>
                  <Typography sx={{ fontWeight: 700 }}> Sysney</Typography>
                  <Typography>
                    3891 Ranchview Dr. Richardson, California 62639
                  </Typography>
                </Stack>
                <Stack spacing={1}>
                  <Typography sx={{ fontWeight: 700 }}> Singapore</Typography>
                  <Typography>
                    4140 Parker Rd. Allentown, New Mexico 31134
                  </Typography>
                </Stack>
              </Stack>
            </Grid>
          </Grid>
        </Stack>
      </Container>
      <Footer />
    </div>
  );
};

export default AboutUs;
