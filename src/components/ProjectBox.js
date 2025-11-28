import React from "react";
import { Stack } from "@mui/material";

export default function ProjectBox({ children, isSecondary, sx }) {
  return (
    <Stack
      direction="column"
      sx={{
        padding: "2rem",
        gap: "1.5rem",
        border: isSecondary ? `solid 2px #3A255B` : "solid 2px #260D50",
        backgroundColor: isSecondary ? "#1D122F" : "#100326",
        borderRadius: "24px",
        marginTop: "1rem",
        alignSelf: "flex-start",
        ...sx,
      }}>
      {children}
    </Stack>
  );
}
