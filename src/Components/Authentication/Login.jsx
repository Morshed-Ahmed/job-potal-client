import {
  Button,
  CircularProgress,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { Stack } from "@mui/system";
import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";
import Header from "../Common/Header";

const Login = () => {
  const [data, setData] = useState();
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const navigate = useNavigate();
  const onSubmit = async (data) => {
    setLoader(true);
    axios
      .post("https://job-portal-api-black.vercel.app/user/login", {
        email: data.email,
        password: data.password,
      })
      .then(function (response) {
        setData(response.data.data.user);
        // console.log(response.data.data.token);
        localStorage.setItem("token", response.data.data.token);
        setLoader(false);
        navigate("/");
      })
      .catch(function (error) {
        setError(error.response.data);
        setLoader(false);
      });
    reset();
  };

  // console.log(data);

  return (
    <div>
      <Header />

      <Stack
        sx={{
          width: { md: "50%", xs: "90%" },
          m: "50px auto ",
        }}
      >
        <Paper elevation={2} sx={{ padding: 5 }}>
          <Typography>{data?.fullName}</Typography>
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* <label htmlFor="email">email</label> */}
            <Stack spacing={3} direction={"column"}>
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

              {error && (
                <span style={{ color: "red" }} role="alert">
                  {error.error}
                </span>
              )}

              {loader && <CircularProgress sx={{ textAlign: "center" }} />}

              <Button variant="contained" color="primary" type="submit">
                SUBMIT
              </Button>

              <Typography>
                Don't have an Account?{" "}
                <NavLink to={"/register"}>Sign up</NavLink>
              </Typography>
            </Stack>
          </form>
        </Paper>
      </Stack>
    </div>
  );
};

export default Login;
