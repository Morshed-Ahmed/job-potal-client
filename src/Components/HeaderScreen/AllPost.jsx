import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  CircularProgress,
  Grid,
  Typography,
} from "@mui/material";
import { Container, Stack } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Header from "../Common/Header";

const AllPost = () => {
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://job-portal-api-black.vercel.app/jobs", {
        params: {
          ID: 12345,
        },
      })
      .then(function (response) {
        setLoading(false);

        setPost(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  return (
    <div>
      <Header />

      <Container sx={{ mt: 3 }}>
        <Stack sx={{ mb: 2 }}>
          <Typography sx={{ fontSize: { md: "32px", xs: "23px" } }}>
            Choose Your Preferred Job
          </Typography>
        </Stack>
        {loading && <CircularProgress />}

        <Grid container spacing={2}>
          {post.map((pt, index) => (
            <Grid key={pt._id} sx={{}} md={3} sm={6} xs={12} item>
              <Card sx={{ m: "auto" }}>
                <CardActionArea>
                  <Stack direction={"row"} spacing={2} sx={{ padding: 2 }}>
                    <CardMedia
                      component="img"
                      sx={{ width: "50px", height: "50px" }}
                      image="http://wp.alithemes.com/html/jobbox/demos/assets/imgs/brands/brand-1.png"
                      alt="green iguana"
                    />
                    <Stack>
                      <Typography variant="h6">{pt?.companyName}</Typography>
                      <Typography variant="subtitle2">
                        {pt?.location}
                      </Typography>
                      {/* <Typography>{pt?.createdAt}</Typography> */}
                    </Stack>
                  </Stack>
                  <CardContent>
                    <Stack spacing={2}>
                      <Typography variant="h6">{pt?.title}</Typography>
                      <Stack direction={"row"} spacing={2}>
                        <span>{pt?.jobType}</span>
                        <span>55minutes ago</span>
                      </Stack>
                      <Typography variant="subtitle2">
                        {pt?.description}
                      </Typography>

                      <Stack>{pt?.skill}</Stack>
                    </Stack>
                  </CardContent>
                </CardActionArea>
                <Stack
                  sx={{ pl: 2, pr: 2 }}
                  direction={"row"}
                  spacing={2}
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Typography>${pt?.salary}/hour</Typography>
                  <CardActions>
                    <div>
                      <NavLink
                        style={{ textDecoration: "none" }}
                        state={pt}
                        to={"/apply"}
                      >
                        <Button variant="contained">Apply Now</Button>
                      </NavLink>
                    </div>
                  </CardActions>
                </Stack>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default AllPost;
