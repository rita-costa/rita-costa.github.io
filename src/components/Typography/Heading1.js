import React from "react";
import { Typography } from "@mui/material";

export default function Heading1({ children }) {
  return (
    <Typography
      variant="h4"
      component="h1"
      align="left"
      style={{ marginTop: "80px" }}>
      <b>{children}</b>
    </Typography>
  );
}
