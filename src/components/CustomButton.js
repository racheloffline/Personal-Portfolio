import React from "react";
import { Button } from "@mui/material";

const styles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "44px",
  padding: "0 25px",
  boxSizing: "border-box",
  borderRadius: 0,
  background: "#4f25f7",
  color: "#fff",
  transform: "none",
  boxShadow: "6px 6px 0 0 #c7d8ed",
  transition: "background .3s,border-color .3s,color .3s",
  "&:hover": {
    backgroundColor: "#4f25f7",
  },
  textTransform: "capitalize",
};

export default function CustomButton(props) {
  return <Button sx={styles}>{props.text}</Button>;
}
