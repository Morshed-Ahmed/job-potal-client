import {
  Box,
  Button,
  CircularProgress,
  IconButton,
  Paper,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import { Container, Stack } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation } from "react-router-dom";
import Header from "../Common/Header";
import CloseIcon from "@mui/icons-material/Close";

const Apply = () => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = React.useState(false);

  //  const handleClick = () => {
  //    setOpen(true);
  //  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const action = (
    <React.Fragment>
      <Button color="secondary" size="small" onClick={handleClose}>
        UNDO
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  useEffect(() => {
    const token = localStorage.getItem("token");
    // console.log(token);

    axios
      .get("https://job-portal-api-black.vercel.app/user/me", {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setUser(res.data.data?.email);
        // setAdmin(res.data.data.role);
      })
      .catch((error) => console.log(error));
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const location = useLocation();
  const datas = location.state;

  const onSubmit = async (data) => {
    setLoading(true);
    const images = data.uploadResume[0];
    const formData = new FormData();
    formData.append("file", images);
    formData.append("upload_preset", process.env.REACT_APP_API_KEY);

    axios
      .post("https://api.cloudinary.com/v1_1/dlyasme8b/image/upload", formData)
      .then((res) => {
        if (res.statusText) {
          const uploadResume = res.data.url;
          const apply = {
            postId: datas._id,
            name: data.name,
            email: data.email,
            userEmail: user,
            contactNumber: data.contactNumber,
            description: data.description,
            uploadResume: uploadResume,
          };

          axios
            .post(`http://localhost:4242/jobs/${datas._id}/apply`, apply)
            .then((response) => {
              // console.log(response);
              setLoading(false);
              setOpen(true);
            })
            .catch((error) => {
              console.log(error);
              setLoading(false);
            });
        }
      })
      .then((error) => {
        // console.log(error);
        setLoading(false);
      });

    reset();
  };
  return (
    <div>
      <Header />

      <Box>
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={handleClose}
          message="Successful your apply"
          action={action}
        />
      </Box>
      <Container sx={{ mt: 2 }}>
        <Paper sx={{ width: "70%", m: "auto", p: 3 }} elevation={2}>
          <Stack sx={{ textAlign: "center", mb: 2 }}>
            <Typography variant="h4">Start Your Career Today</Typography>
            <Typography variant="body1">
              Please fill in your information and send it to the employer.
            </Typography>
          </Stack>
          <Stack>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Stack spacing={3} direction={"column"}>
                <TextField
                  label="Full Name"
                  variant="outlined"
                  id="name"
                  {...register("name", {
                    required: "required",
                  })}
                  type="text"
                />
                {errors.name && (
                  <span style={{ color: "red" }} role="alert">
                    {errors.name.message}
                  </span>
                )}

                <TextField
                  label="Email"
                  variant="outlined"
                  id="email"
                  {...register("email", {
                    required: "required",
                    pattern: {
                      value: /\S+@\S+\.\S+/,
                      message: "Entered value does not match email format",
                    },
                  })}
                  type="email"
                />
                {errors.email && (
                  <span style={{ color: "red" }} role="alert">
                    {errors.email.message}
                  </span>
                )}

                <TextField
                  label="Contact Number "
                  variant="outlined"
                  id="contactNumber"
                  {...register("contactNumber", {
                    required: "required",
                  })}
                  type="number"
                />
                {errors.contactNumber && (
                  <span style={{ color: "red" }} role="alert">
                    {errors.contactNumber.message}
                  </span>
                )}

                <TextField
                  label="Description "
                  variant="outlined"
                  id="description"
                  {...register("description", {
                    required: "required",
                  })}
                  type="text"
                />
                {errors.description && (
                  <span style={{ color: "red" }} role="alert">
                    {errors.description.message}
                  </span>
                )}

                <TextField
                  focused
                  label="Upload Resume"
                  variant="outlined"
                  accept="application/pdf,application/vnd.ms-excel"
                  id="uploadResume"
                  {...register("uploadResume", {
                    required: "required",
                  })}
                  type="file"
                />
                {errors.uploadResume && (
                  <span style={{ color: "red" }} role="alert">
                    {errors.uploadResume.message}
                  </span>
                )}

                {loading && <CircularProgress sx={{ textAlign: "center" }} />}

                <Button variant="contained" color="primary" type="submit">
                  SUBMIT
                </Button>
              </Stack>
            </form>
          </Stack>
        </Paper>
      </Container>
    </div>
  );
};

export default Apply;
