// import axios from "axios";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../Authentication/Login";
import Register from "../Authentication/Register";
import Dashboard from "../Dashboard/Dashboard";
import Home from "../HomeScreen/Home";
import Address from "../Profile/Address";
import JobCreate from "../Profile/JobCreate";
import MyProfile from "../Profile/MyProfile";
import Profile from "../Profile/Profile";
import NotFound from "./NotFound";

const Routers = () => {
  // const [user, setUser] = React.useState();
  // const [admin, setAdmin] = React.useState();

  // React.useEffect(() => {
  //   const token = localStorage.getItem("token");
  //   // console.log(token);

  //   axios
  //     .get("https://job-portal-api-black.vercel.app/user/me", {
  //       headers: {
  //         authorization: `Bearer ${token}`,
  //       },
  //     })
  //     .then((res) => {
  //       setUser(res.data.data);
  //       setAdmin(res.data.data.role);
  //     })
  //     .catch((error) => console.log(error));
  // }, []);

  // console.log(admin);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="profile" element={<Profile />}>
        <Route index element={<MyProfile />} />
        <Route path="myProfile" element={<MyProfile />} />
        <Route path="addJob" element={<JobCreate />} />
        <Route path="address" element={<Address />} />
      </Route>
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Routers;
