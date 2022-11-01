// import axios from "axios";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../Authentication/Login";
import Register from "../Authentication/Register";
import AllCandidate from "../Dashboard/AllCandidate";
import AllHiringManager from "../Dashboard/AllHiringManager";
import Dashboard from "../Dashboard/Dashboard";
import DashboardIndex from "../Dashboard/DashboardIndex";
import AboutUs from "../HeaderScreen/AboutUs";
import AllPost from "../HeaderScreen/AllPost";
import Blog from "../HeaderScreen/Blog";
import ContactUs from "../HeaderScreen/ContactUs";
import Home from "../HomeScreen/Home";
import Apply from "../ImportentRoute/Apply";
import Address from "../Profile/Address";
import ApplyDetails from "../Profile/ApplyDetails";
import JobCreate from "../Profile/JobCreate";
import MyJobPost from "../Profile/MyJobPost";
import MyProfile from "../Profile/MyProfile";
import Profile from "../Profile/Profile";
import NotFound from "./NotFound";
// import RequireAdmin from "./PrivateRoute";
// import RequireAdmim from "./PrivateRoute";

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
        <Route path="myJobPost" element={<MyJobPost />} />
      </Route>
      <Route path="dashboard" element={<Dashboard />}>
        <Route index element={<DashboardIndex />} />
        <Route path="dashboardIndex" element={<DashboardIndex />} />
        <Route path="allCandidate" element={<AllCandidate />} />
        <Route path="allHiringManager" element={<AllHiringManager />} />
      </Route>
      <Route path="apply" element={<Apply />} />
      <Route path="applyDetails" element={<ApplyDetails />} />
      <Route path="allPost" element={<AllPost />} />
      <Route path="blog" element={<Blog />} />
      <Route path="about" element={<AboutUs />} />
      <Route path="contact" element={<ContactUs />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Routers;
