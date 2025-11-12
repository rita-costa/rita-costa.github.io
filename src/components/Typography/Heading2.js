import React from "react";
import { Typography } from "@mui/material";

export default function Heading1({ children }) {
  return (
    <Typography variant="h6" component="h3" align="left">
      {children}
    </Typography>
  );
}
