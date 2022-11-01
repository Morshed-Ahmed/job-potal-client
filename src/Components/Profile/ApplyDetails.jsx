import {
  CircularProgress,
  Grid,
  Link,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { Container } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "../Common/Header";

const ApplyDetails = () => {
  const [apply, setApply] = useState([]);
  const [loading, setLoading] = useState(false);

  const location = useLocation();
  const data = location.state;
  //   console.log(data);

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `https://job-portal-api-black.vercel.app/jobs/manager/apply-details/${data}`
      )
      .then((res) => {
        setApply(res.data.data);
        setLoading(false);
        // console.log(res.data.data);
      })
      .then((error) => {
        //   console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <Header />

      <Container sx={{ mt: 2 }}>
        <Typography variant="h5">Total Apply: {apply?.length}</Typography>

        <Grid sx={{ mt: 2 }} spacing={2} container>
          {loading && <CircularProgress />}
          {apply.map((ap) => (
            <Grid sx={{}} key={ap._id} md={4} xs={12} item>
              <Paper sx={{ p: 2, backgroundColor: "#e8dede" }} elevation={2}>
                <Stack spacing={2}>
                  <Stack>
                    <Typography>Full Name</Typography>
                    <Typography variant="h6">{ap?.name}</Typography>
                  </Stack>
                  <Stack>
                    <Typography>Email </Typography>
                    <Typography variant="h6">{ap?.email}</Typography>
                  </Stack>
                  <Stack>
                    <Typography>Description</Typography>
                    <Typography variant="body2"> {ap?.description}</Typography>
                  </Stack>
                  <Stack>
                    <Typography>Contact Number</Typography>
                    <Typography variant="h6">{ap?.contactNumber}</Typography>
                  </Stack>

                  <Link href={ap?.uploadResume}>Resume Link</Link>
                </Stack>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default ApplyDetails;
