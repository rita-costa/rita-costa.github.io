import React from "react";
import { Typography } from "@mui/material";

export default function Heading1({ children }) {
  return (
    <Typography
      variant="h4"
      component="h2"
      align="left"
      sx={{ marginY: "1.5rem" }}>
      {children}
    </Typography>
  );
}
