import {
  Button,
  CircularProgress,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Snackbar,
  Stack,
  TextField,
} from "@mui/material";
// import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import CloseIcon from "@mui/icons-material/Close";
import { useLocation } from "react-router-dom";

const JobCreate = () => {
  const [jobCategory, setJobCategory] = React.useState("");
  const [jobType, setJobType] = React.useState("");
  const [workplace, setWorkplace] = React.useState("");
  // const [email, setEmail] = React.useState("");

  const location = useLocation();
  const userEmail = location.state;

  const handleChangeJobCategory = (event) => {
    setJobCategory(event.target.value);
  };
  const handleChangesetJobType = (event) => {
    setJobType(event.target.value);
  };
  const handleChangesetWorkplace = (event) => {
    setWorkplace(event.target.value);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [job, setJob] = useState();
  const [loader, setLoader] = useState(false);
  // const [error, setError] = useState("");
  const [open, setOpen] = useState(false);

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

  //   const navigate = useNavigate();
  const onSubmit = async (data) => {
    // console.log(userEmail.email);
    data.jobCategory = jobCategory;
    data.jobType = jobType;
    data.email = userEmail.email;

    // console.log(data);
    // const token = localStorage.getItem("token");

    setLoader(true);

    fetch("https://job-portal-api-black.vercel.app/jobs", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        setJob(data);
        setOpen(true);
        setLoader(false);
      })
      .catch((error) => {
        console.log(error);
      });

    // console.log(job);

    // .then((inserted) => {
    //   if (inserted.insertedId) {
    //     console.log("Doctor added successfully");
    //     reset();
    //   } else {
    //     console.log("Failed to add the doctor");
    //   }
    // });
    // axios
    //   .post(
    //     "https://job-portal-api-black.vercel.app/jobs",
    //     {
    //       headers: {
    //         // "content-type": "application/json",
    //         authorization: `Bearer ${token}`,
    //       },
    //       body: JSON.stringify(data),
    //     }

    //     // {
    //     //   address: data.address,
    //     //   companyName: data.companyName,
    //     //   description: data.description,
    //     //   jobCategory: data.jobCategory,
    //     //   jobTitle: data.jobTitle,
    //     //   jobType: data.jobType,
    //     //   location: data.location,
    //     //   salary: data.salary,
    //     //   skill: data.skill,
    //     // }
    //   )
    //   .then(function (response) {
    //     // setData(response.data.data.user);
    //     console.log(response);
    //     // console.log(response.data.data.token);
    //     // localStorage.setItem("token", response.data.data.token);
    //     // setLoader(false);
    //     // navigate("/");
    //   })
    //   .catch(function (error) {
    //     // setError(error.response.data);
    //     // setLoader(false);
    //     console.log(error);
    //   });
    reset();
  };

  return (
    <div>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message={job?.message}
        action={action}
      />
      <Paper sx={{ padding: 3 }} elevation={2}>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* <label htmlFor="email">email</label> */}
          <Stack spacing={3} direction={"column"}>
            <TextField
              label="Job Title"
              variant="outlined"
              id="title"
              {...register("title", { required: "required" })}
              type="text"
            />

            {errors.title && (
              <span style={{ color: "red" }} role="alert">
                {errors.title.message}
              </span>
            )}

            <TextField
              label="Company Name"
              variant="outlined"
              id="companyName"
              {...register("companyName", {
                required: "required",
              })}
              type="text"
            />
            {errors.companyName && (
              <span style={{ color: "red" }} role="alert">
                {errors.companyName.message}
              </span>
            )}

            <TextField
              label="Description"
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
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">
                Job Category
              </InputLabel>
              <Select
                {...register("jobCategory", {
                  required: "required",
                })}
                // required
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={jobCategory}
                label="jobCategory"
                onChange={handleChangeJobCategory}
              >
                <MenuItem value={"software"}>Software</MenuItem>
                <MenuItem value={"finance"}>Finance</MenuItem>
                <MenuItem value={"recruiting"}>Recruiting</MenuItem>
                <MenuItem value={"management"}>Management</MenuItem>
                <MenuItem value={"advertising"}>Advertising</MenuItem>
              </Select>
            </FormControl>
            {errors.jobCategory && (
              <span style={{ color: "red" }} role="alert">
                {errors.jobCategory.message}
              </span>
            )}

            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Job Type</InputLabel>
              <Select
                {...register("jobType", {
                  required: "required",
                })}
                // required
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={jobType}
                label="jobType"
                onChange={handleChangesetJobType}
              >
                <MenuItem value={"fulltime"}>Fulltime</MenuItem>
                <MenuItem value={"part-time"}>Part Time</MenuItem>
                <MenuItem value={"remote-job"}>Remote Job</MenuItem>
                <MenuItem value={"freelancer"}>Freelancer</MenuItem>
              </Select>
            </FormControl>
            {errors.jobType && (
              <span style={{ color: "red" }} role="alert">
                {errors.jobType.message}
              </span>
            )}

            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Workplace</InputLabel>
              <Select
                {...register("workplace", {
                  required: "required",
                })}
                // required
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={workplace}
                label="workplace"
                onChange={handleChangesetWorkplace}
              >
                <MenuItem value={"on-site"}>On-Site</MenuItem>
                <MenuItem value={"remote"}>Remote</MenuItem>
                <MenuItem value={"hybrid"}>Hybrid</MenuItem>
              </Select>
            </FormControl>
            {errors.jobType && (
              <span style={{ color: "red" }} role="alert">
                {errors.jobType.message}
              </span>
            )}

            {/* <label htmlFor="password">password</label> */}
            <TextField
              label="Office Address"
              variant="outlined"
              id="address"
              {...register("address", {
                required: "required",
                // minLength: {
                //   value: 5,
                //   message: "min length is 5",
                // },
              })}
              type="text"
            />
            {errors.address && (
              <span style={{ color: "red" }} role="alert">
                {errors.address.message}
              </span>
            )}

            <TextField
              label="Country"
              variant="outlined"
              id="location"
              {...register("location", {
                required: "required",
                // minLength: {
                //   value: 5,
                //   message: "min length is 5",
                // },
              })}
              type="text"
            />
            {errors.location && (
              <span style={{ color: "red" }} role="alert">
                {errors.location.message}
              </span>
            )}

            <TextField
              label="Must Skill"
              variant="outlined"
              id="skill"
              {...register("skill", {
                required: "required",
                // minLength: {
                //   value: 5,
                //   message: "min length is 5",
                // },
              })}
              type="text"
            />
            {errors.skill && (
              <span style={{ color: "red" }} role="alert">
                {errors.skill.message}
              </span>
            )}

            <TextField
              label="Job Salary"
              variant="outlined"
              id="salary"
              {...register("salary", {
                required: "required",
                // minLength: {
                //   value: 5,
                //   message: "min length is 5",
                // },
              })}
              type="number"
            />
            {errors.salary && (
              <span style={{ color: "red" }} role="alert">
                {errors.salary.message}
              </span>
            )}
            <TextField
              focused
              // label="Outlined secondary"
              label="Apply Last Date"
              variant="outlined"
              id="applyLastDate"
              {...register("applyLastDate", {
                required: "required",
                // minLength: {
                //   value: 5,
                //   message: "min length is 5",
                // },
              })}
              type="date"
            />
            {errors.applyLastDate && (
              <span style={{ color: "red" }} role="alert">
                {errors.applyLastDate.message}
              </span>
            )}

            {loader && <CircularProgress sx={{ textAlign: "center" }} />}

            <Button variant="contained" color="primary" type="submit">
              SUBMIT
            </Button>

            {/* <Typography>
              Already have an account? <NavLink to={"/login"}>Sign in</NavLink>
            </Typography> */}
          </Stack>
        </form>
      </Paper>
    </div>
  );
};

export default JobCreate;
