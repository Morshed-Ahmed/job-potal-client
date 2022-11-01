import { Stack } from "@mui/system";
import React from "react";

const NotFound = () => {
  const styles = {
    paperContainer: {
      height: "100vh",
      backgroundImage: `url(${"https://i.ibb.co/y52jTjk/400-Error-Bad-Request-cuate.png"})`,
      backgroundSize: "contain",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      width: "100%",
    },
  };

  return (
    <div>
      <Stack style={styles.paperContainer}></Stack>
      {/* <Typography>This page is NOTFOUND</Typography> */}
    </div>
  );
};

export default NotFound;
