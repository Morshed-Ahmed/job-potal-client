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

const JobPost = () => {
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(false);
  const [ago, setAgo] = useState([]);

  var myDate = new Date();
  var output =
    myDate.getFullYear() +
    "-" +
    (myDate.getMonth() + 1) +
    "-" +
    myDate.getDate();
  // console.log(output);

  //   .get("https://job-portal-api-black.vercel.app/jobs", {
  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://job-portal-api-black.vercel.app/jobs/date/${output}`, {
        params: {
          ID: 12345,
        },
      })
      .then(function (response) {
        setLoading(false);
        // console.log(response.data.data.createdAt);
        // const db = response.data.data.find((db) => {
        //   const nowDate = new Date().getMinutes();
        //   const date = new Date(db.createdAt).getMinutes();
        //   const ago = nowDate - date;
        //   // alu.createdAt = ago;

        //   return ago;
        //   // const slo = response.data.data;
        //   // slo.createdAt = ago;
        // });

        // const minit = response.data.data.filter((fl) => {
        //   const data = new Date(fl.createdAt).getMinutes();
        //   setAgo(data);
        // });

        setPost(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  // const db = post.find((db) => {
  //   const nowDate = new Date().getMinutes();
  //   const date = new Date(db.createdAt).getMinutes();
  //   const ago = date - nowDate;

  //   console.log(ago);
  // });

  return (
    <div>
      <Container>
        <Typography sx={{ fontSize: { md: 35, xs: 25 } }}>
          Jobs of the day
        </Typography>

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
                        <span>{(index = ago)} minutes ago</span>
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
                        to={"apply"}
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

export default JobPost;
