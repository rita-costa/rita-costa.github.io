import React from "react";
import { Stack } from "@mui/material";

export default function ProjectContextBox({ children }) {
  return (
    <Stack
      direction="column"
      sx={{
        maxWidth: "800px",
        padding: "2rem",
        gap: "1.5rem",
        border: "2px solid #B43065",
        borderRadius: "8px",
        marginTop: "1rem",
      }}>
      {children}
    </Stack>
  );
}
