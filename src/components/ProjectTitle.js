import React from "react";
import { Stack, Typography } from "@mui/material";

export default function ProjectTitle({ title, info, skills }) {
  return (
    <Stack
      direction="column"
      sx={{
        backgroundColor: "#DEA5BC",
        marginTop: "-20px",
        justifyContent: "space-evenly",
        paddingX: "1rem",
      }}
      width={"100%"}
      height={"28vh"}>
      <Typography
        variant="h4"
        componet="h1"
        align="left"
        sx={{ width: "40vw" }}>
        <span class="title">{title}</span>
      </Typography>

      <Typography variant="body2" component="h2">
        {info}
        <br />
        <span class="title">{skills}</span>
      </Typography>
    </Stack>
  );
}
