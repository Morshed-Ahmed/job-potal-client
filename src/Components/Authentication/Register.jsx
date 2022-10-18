import {
  Button,
  CircularProgress,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Header from "../Common/Header";

const Register = () => {
  const [data, setData] = useState();
  const [loader, setLoader] = useState(false);
  const [open, setOpen] = React.useState(false);

  // const handleClick = () => {
  //   setOpen(true);
  // };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const action = (
    <React.Fragment>
      {/* <Button color="secondary" size="small" onClick={handleClose}>
        UNDO
      </Button> */}
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

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const navigate = useNavigate();
  const onSubmit = async (data) => {
    // console.log(
    //   data.fullName,
    //   data.username,
    //   data.email,
    //   data.password,
    //   data.conformPassword
    // );
    setLoader(true);

    axios
      .post("https://job-portal-api-black.vercel.app/user/signup", {
        email: data.email,
        password: data.password,
        confirmPassword: data.confirmPassword,
        fullName: data.fullName,
        userName: data.username,
      })
      .then(function (response) {
        setData(response.data);
        setLoader(false);
        setOpen(true);
        navigate("/login");
      })
      .catch(function (error) {
        console.log(error);
        setLoader(false);
      });
    reset();
  };

  return (
    <div>
      <Header />
      <Stack
        sx={{
          width: { md: "50%", xs: "90%" },
          m: "50px auto ",
        }}
      >
        {/* <Button onClick={handleClick}>Open simple snackbar</Button> */}
        {/* {data && ( */}
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={handleClose}
          message={data?.message}
          action={action}
        />
        {/* )} */}

        <Paper elevation={2} sx={{ padding: 5 }}>
          {/* <Typography>{data?.fullName}</Typography> */}
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* <label htmlFor="email">email</label> */}
            <Stack spacing={3} direction={"column"}>
              <TextField
                label="Full Name"
                variant="outlined"
                id="fullName"
                {...register("fullName", { required: "required" })}
                type="text"
              />

              {errors.fullName && (
                <span style={{ color: "red" }} role="alert">
                  {errors.fullName.message}
                </span>
              )}

              <TextField
                label="Username"
                variant="outlined"
                id="username"
                {...register("username", {
                  required: "required",
                })}
                type="username"
              />
              {errors.username && (
                <span style={{ color: "red" }} role="alert">
                  {errors.username.message}
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

              {/* <label htmlFor="password">password</label> */}
              <TextField
                label="Password"
                variant="outlined"
                id="password"
                {...register("password", {
                  required: "required",
                  minLength: {
                    value: 5,
                    message: "min length is 5",
                  },
                })}
                type="password"
              />
              {errors.password && (
                <span style={{ color: "red" }} role="alert">
                  {errors.password.message}
                </span>
              )}

              <TextField
                label="Re-Password"
                variant="outlined"
                id="confirmPassword"
                {...register("confirmPassword", {
                  required: "required",
                  minLength: {
                    value: 5,
                    message: "min length is 5",
                  },
                })}
                type="password"
              />
              {errors.confirmPassword && (
                <span style={{ color: "red" }} role="alert">
                  {errors.confirmPassword.message}
                </span>
              )}

              {loader && <CircularProgress sx={{ textAlign: "center" }} />}

              <Button variant="contained" color="primary" type="submit">
                SUBMIT
              </Button>

              <Typography>
                Already have an account?{" "}
                <NavLink to={"/login"}>Sign in</NavLink>
              </Typography>
            </Stack>
          </form>
        </Paper>
      </Stack>
    </div>
  );
};

export default Register;
