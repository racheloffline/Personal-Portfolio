import React from "react";
import { Typography } from "@mui/material";
import NavBar from "../components/NavBar";
import CustomButton from "../components/CustomButton";

export default function Home() {
  return (
    <div>
      <NavBar />
      <Typography variant="h1">Home :3</Typography>
      <CustomButton text="yeet" />
    </div>
  );
}
