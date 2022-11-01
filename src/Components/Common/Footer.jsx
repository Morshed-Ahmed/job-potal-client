import { Divider, Grid, Link, Stack, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";

const Footer = () => {
  return (
    <div>
      <Container sx={{ mt: 10 }}>
        <Grid spacing={2} container>
          <Grid md={4} lg={3} sm={6} xs={12} item>
            <Stack spacing={1}>
              <Typography
                sx={{ fontSize: "27px", fontWeight: 700, color: "blue" }}
              >
                JOB PORTAL
              </Typography>
              <Typography sx={{ color: "#8E9098" }} variant="body2">
                JobBox is the heart of the design community and the best
                resource to discover and connect with designers and jobs
                worldwide.
              </Typography>
            </Stack>
          </Grid>
          <Grid md={4} lg={1.5} sm={6} xs={12} item>
            <Stack spacing={2}>
              <Typography>Resources</Typography>
              <Stack spacing={1}>
                <Link href="#" sx={{ color: "#8E9098" }} underline="hover">
                  About us
                </Link>
                <Link href="#" sx={{ color: "#8E9098" }} underline="hover">
                  Our Team
                </Link>
                <Link href="#" sx={{ color: "#8E9098" }} underline="hover">
                  Products
                </Link>
                <Link href="#" sx={{ color: "#8E9098" }} underline="hover">
                  Contact
                </Link>
              </Stack>
            </Stack>
          </Grid>
          <Grid md={4} lg={1.5} sm={6} xs={12} item>
            <Stack spacing={2}>
              <Typography>Community</Typography>
              <Stack spacing={1}>
                <Link href="#" sx={{ color: "#8E9098" }} underline="hover">
                  Feature
                </Link>
                <Link href="#" sx={{ color: "#8E9098" }} underline="hover">
                  Pricing
                </Link>
                <Link href="#" sx={{ color: "#8E9098" }} underline="hover">
                  Credit
                </Link>
                <Link href="#" sx={{ color: "#8E9098" }} underline="hover">
                  FAQ
                </Link>
              </Stack>
            </Stack>
          </Grid>
          <Grid md={4} lg={1.5} sm={6} xs={12} item>
            <Stack spacing={2}>
              <Typography>Quick links</Typography>
              <Stack spacing={1}>
                <Link href="#" sx={{ color: "#8E9098" }} underline="hover">
                  IOS
                </Link>
                <Link href="#" sx={{ color: "#8E9098" }} underline="hover">
                  Android
                </Link>
                <Link href="#" sx={{ color: "#8E9098" }} underline="hover">
                  Microsoft
                </Link>
                <Link href="#" sx={{ color: "#8E9098" }} underline="hover">
                  Desktop
                </Link>
              </Stack>
            </Stack>
          </Grid>
          <Grid md={4} lg={1.5} sm={6} xs={12} item>
            <Stack spacing={2}>
              <Typography>More</Typography>
              <Stack spacing={1}>
                <Link href="#" sx={{ color: "#8E9098" }} underline="hover">
                  Privacy
                </Link>
                <Link href="#" sx={{ color: "#8E9098" }} underline="hover">
                  Help
                </Link>
                <Link href="#" sx={{ color: "#8E9098" }} underline="hover">
                  Terms
                </Link>
                <Link href="#" sx={{ color: "#8E9098" }} underline="hover">
                  FAQ
                </Link>
              </Stack>
            </Stack>
          </Grid>
          <Grid md={4} lg={3} sm={6} xs={12} item>
            <Stack spacing={2}>
              <Typography>Download App</Typography>
              <Typography sx={{ color: "#8E9098" }} variant="body2">
                Download our Apps and get extra 15% Discount on your first
                Order…!
              </Typography>
            </Stack>
          </Grid>
        </Grid>
        <Divider sx={{ mt: 5 }} />
        <Stack sx={{ my: 5 }} direction={"row"} justifyContent="space-between">
          <Typography sx={{ color: "#8E9098" }}>
            Copyright © 2022. JobPortal all right reserved
          </Typography>
          <Stack direction={"row"} spacing={2}>
            <Link href="#" sx={{ color: "#8E9098" }} underline="hover">
              Privacy Policy
            </Link>
            <Link href="#" sx={{ color: "#8E9098" }} underline="hover">
              Terms & Conditions
            </Link>
            <Link href="#" sx={{ color: "#8E9098" }} underline="hover">
              Security
            </Link>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
};

export default Footer;
