import { Typography } from "@mui/material";
import React from "react";
import { useLocation } from "react-router-dom";

const Address = () => {
  const location = useLocation();
  const data = location.state;
  console.log(data);
  return (
    <div>
      <Typography>This is address page</Typography>
    </div>
  );
};

export default Address;
