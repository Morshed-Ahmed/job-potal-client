import { Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";

const DashboardIndex = () => {
  return (
    <div>
      <Container>
        <Typography variant="h5" sx={{ fontWeight: 700 }}>
          WELL COME TO ADMIN DASHBOARD
        </Typography>
      </Container>
    </div>
  );
};

export default DashboardIndex;
