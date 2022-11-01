import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import axios from "axios";

const RequireAdmin = ({ children }) => {
  const [admin, setAdmin] = React.useState();
  // console.log(token);
  const location = useLocation();

  const token = localStorage.getItem("token");
  // console.log(token);

  axios
    .get("https://job-portal-api-black.vercel.app/user/me", {
      headers: {
        authorization: `Bearer ${token}`,
      },
    })
    .then((res) => {
      // setUser(res.data.data);
      setAdmin(res.data.data.role);
    })
    .catch((error) => console.log(error));

  //   if (loading || adminLoading) {
  //     return <Loading></Loading>;
  //   }

  if (!admin === "hiring-manager") {
    // signOut(auth);
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
  }
  return children;
};

export default RequireAdmin;
