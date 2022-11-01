import { Button, Grid, TextField, Typography } from "@mui/material";
import { Container, Stack } from "@mui/system";
import React from "react";

const Subscribe = () => {
  return (
    <div>
      <Container
        sx={{ backgroundColor: "blue", p: 3, borderRadius: 5, mt: 10 }}
      >
        <Stack>
          <Grid spacing={3} container>
            <Grid display={{ md: "flex", xs: "none" }} md={3} item>
              <img
                src="http://wp.alithemes.com/html/jobbox/demos/assets/imgs/template/newsletter-left.png"
                alt=""
              />
            </Grid>
            <Grid alignSelf={"center"} md={6} item>
              <Stack
                spacing={2}
                sx={{
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <Typography
                  color={"white"}
                  sx={{ fontSize: { md: 40, xs: 25 } }}
                >
                  New Things Will Always Update Regularly
                </Typography>
                <Stack
                  sx={{ backgroundColor: "white", p: 1, borderRadius: 2 }}
                  direction={"row"}
                >
                  <TextField
                    id="outlined-basic"
                    // color="info"
                    label="Message"
                    variant="outlined"
                  />
                  <Button variant="contained">Subscribe</Button>
                </Stack>
              </Stack>
            </Grid>
            <Grid display={{ md: "flex", xs: "none" }} md={3} item>
              <img
                src="http://wp.alithemes.com/html/jobbox/demos/assets/imgs/template/newsletter-right.png"
                alt=""
              />
            </Grid>
          </Grid>
        </Stack>
      </Container>
    </div>
  );
};

export default Subscribe;
