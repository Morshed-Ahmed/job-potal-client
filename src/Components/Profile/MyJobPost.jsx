import {
  Card,
  CardActionArea,
  CircularProgress,
  Grid,
  Tooltip,
  Typography,
} from "@mui/material";
import { Box, Stack } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

const MyJobPost = () => {
  const [postData, setPostData] = useState([]);
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const data = location.state;
  //   console.log(data);
  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `https://job-portal-api-black.vercel.app/manager/jobs/${data?.email}`,
        {
          headers: {
            "content-type": "application/json",
            authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          params: {
            ID: 12345,
          },
        }
      )
      .then(function (response) {
        setPostData(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      {loading && <CircularProgress />}
      <Card sx={{}}>
        {postData.map((pd) => (
          <CardActionArea key={pd._id} sx={{ padding: 2 }}>
            <Grid spacing={2} container>
              <Grid md={4} xs={12} item>
                <Stack spacing={2} direction={"row"}>
                  <img
                    style={{ width: "50px" }}
                    src="http://wp.alithemes.com/html/jobbox/demos/assets/imgs/brands/brand-1.png"
                    alt=""
                  />
                  <Stack>
                    <Typography variant="h6">{pd?.companyName}</Typography>
                    <Typography>{pd?.location} </Typography>
                  </Stack>
                </Stack>
              </Grid>
              <Grid md={8} xs={12} item>
                <Stack spacing={2}>
                  <Stack direction={"row"} justifyContent="space-between">
                    <Typography variant="h6">{pd?.title} </Typography>
                    <Box>
                      <NavLink to={"/applyDetails"} state={pd._id}>
                        <Tooltip title="Applied details of this post">
                          {/* <IconButton> */}
                          <img
                            style={{ width: "50px" }}
                            src="https://i.ibb.co/SxKmYKB/checked.png"
                            alt=""
                          />
                          {/* </IconButton> */}
                        </Tooltip>
                      </NavLink>
                    </Box>
                  </Stack>
                  <Typography variant="subtitle1">{pd?.description}</Typography>
                </Stack>
                <Stack
                  direction={"row"}
                  justifyContent="space-between"
                  spacing={2}
                  mt={2}
                >
                  <Stack spacing={1.5}>
                    <Typography variant="body1">{pd?.jobType} </Typography>
                    <Typography variant="body1">{pd?.skill}</Typography>
                  </Stack>
                  <Stack>
                    <Typography>${pd?.salary}/hour</Typography>
                  </Stack>
                </Stack>
              </Grid>
            </Grid>
          </CardActionArea>
        ))}
      </Card>
    </div>
  );
};

export default MyJobPost;
