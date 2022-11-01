import { Grid, Typography } from "@mui/material";
import { Box, Container, Stack } from "@mui/system";
import React, { useEffect, useState } from "react";

const JobsByLocation = () => {
  const [location, setLocation] = useState([]);

  useEffect(() => {
    fetch("/location.json")
      .then((res) => res.json())
      .then((data) => setLocation(data));
  }, []);
  return (
    <div>
      <Container sx={{ mt: { md: 15, xs: 10 }, mb: 4 }}>
        <Stack sx={{ textAlign: "center", mb: 4 }}>
          <Typography sx={{ fontSize: { md: 35, xs: 25 } }}>
            Jobs by Location
          </Typography>
          <Typography>
            Find your favourite jobs and get the benefits of yourself
          </Typography>
        </Stack>
        <Grid spacing={2} container>
          {location.map((lp) => (
            <Grid key={lp.id} md={4} xs={12} item>
              <Box sx={{ border: "1px solid #ccc1c1", p: 2, borderRadius: 2 }}>
                <Stack spacing={2}>
                  <Stack spacing={2}>
                    <img src={lp?.img} alt="" />
                    <Typography>{lp?.name}</Typography>
                  </Stack>
                  <Stack direction={"row"} justifyContent="space-between">
                    <Typography>{lp?.vacancy} Vacancy</Typography>
                    <Typography>{lp?.companies} companies</Typography>
                  </Stack>
                </Stack>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default JobsByLocation;
