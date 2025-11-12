import React from "react";
import { Typography } from "@mui/material";

export default function Heading1({ children }) {
  return (
    <Typography variant="body1" component="p" align="left">
      {children}
    </Typography>
  );
}
