import React from "react";
import { Stack, Typography, Chip } from "@mui/material";

export default function ProjectTitle({ title, info, skills }) {
  return (
    <Stack
      direction="column"
      sx={{
        backgroundColor: "#100326",
        justifyContent: "space-evenly",
        paddingX: "1rem",
      }}
      width={"100%"}
      height={"70vh"}>
      <Stack direction="column" spacing={2}>
        <Typography
          variant="h4"
          componet="h1"
          align="left"
          sx={{ width: "40vw" }}>
          <b>{title}</b>
        </Typography>
        <Typography variant="body2" component="h2">
          {info}
        </Typography>
      </Stack>

      <Stack direction="row" spacing={1} alignItems={"center"}>
        {skills.map((skill) => {
          return (
            <Chip
              label={skill.toUpperCase()}
              variant="outlined"
              color="primary"
            />
          );
        })}
      </Stack>
    </Stack>
  );
}
