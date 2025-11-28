import React from "react";
import { Typography } from "@mui/material";

export default function Heading1({ children, sx }) {
  return (
    <Typography variant="body1" component="p" align="left" sx={{ ...sx }}>
      {children}
    </Typography>
  );
}
