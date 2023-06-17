import { Box, Typography } from "@mui/material";
import { purple } from "@mui/material/colors";
import React from "react";

export default function NavBar() {
  return (
    <div>
      <Box sx={style}>
        <Typography variant="h2">Home</Typography>
        <Typography variant="h2">About</Typography>
        <Typography variant="h2">Projects</Typography>
      </Box>
    </div>
  );
}

const style = {
  display: "flex",
  justifyContent: "space-between",
  padding: 5,
  paddingLeft: 30,
  paddingRight: 30,
};
