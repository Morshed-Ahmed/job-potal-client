import { Grid, TextField, Typography } from "@mui/material";
import { Container, Stack } from "@mui/system";
import React from "react";
import Footer from "../Common/Footer";
import Header from "../Common/Header";

const ContactUs = () => {
  return (
    <div>
      <Header />
      <Container sx={{ mt: 10 }}>
        <Stack sx={{ mb: 4, textAlign: "center" }}>
          <Typography sx={{ fontSize: { md: 35, xs: 25 } }}>
            Contact Us
          </Typography>
          <Typography>
            The right move at the right time saves your investment. live the
            dream of expanding your business.
          </Typography>
        </Stack>

        <Stack sx={{ width: { md: "70%", xs: "100%" }, m: "auto" }}>
          <Grid spacing={2} container>
            <Grid md={6} xs={12} item>
              <Stack spacing={2}>
                <TextField
                  id="outlined-basic"
                  label="Your Name"
                  variant="outlined"
                />
                <TextField
                  id="outlined-basic"
                  label="Company (optional)"
                  variant="outlined"
                />
              </Stack>
            </Grid>
            <Grid md={6} xs={12} item>
              {" "}
              <Stack spacing={2}>
                <TextField
                  id="outlined-basic"
                  label="Your Email"
                  variant="outlined"
                />
                <TextField
                  id="outlined-basic"
                  label="Phone Number"
                  variant="outlined"
                />
              </Stack>
            </Grid>
            <Grid md={12} xs={12} item>
              <textarea
                style={{ width: "100%" }}
                rows="10"
                // cols="105"
                placeholder="Tell us about yourself"
              />
            </Grid>
          </Grid>
        </Stack>
      </Container>
      <Footer />
    </div>
  );
};

export default ContactUs;
