import { Button, Container, Stack, Typography, Chip } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import AboutThisWebsite from "../components/AboutThisWebsite";

const Home = () => {
  return (
    <Container>
      <Stack gap={20}>
        <Stack
          direction="row"
          spacing={10}
          alignItems={"center"}
          sx={{ height: "80vh" }}>
          <img src="/head.png" alt="logo" style={{ height: "400px" }} />

          <Stack gap={2}>
            <Stack direction="row" spacing={3} alignItems={"center"}>
              <Chip label="USER RESEARCH" variant="outlined" color="primary" />
              <Chip label="UX DESIGN" variant="outlined" color="primary" />
              <Chip
                label="FRONT-END ENGINEERING"
                variant="outlined"
                color="primary"
              />
            </Stack>

            <Typography
              variant="h4"
              component="h2"
              gutterBottom
              align="left"
              sx={{
                b: {
                  textDecoration: "underline #DEA5BC",
                },
              }}>
              Hi there! I'm Rita, a <b>UX researcher</b> with a background in
              software engineering, based in <b>London, UK</b>. I'm passionate
              about creating <b>inclusive</b> and <b>meaningful</b> digital
              experiences.
            </Typography>

            <Stack
              direction="row"
              spacing={3}
              alignItems={"center"}
              sx={{ paddingTop: "12px" }}>
              <Button
                variant="contained"
                color="secondary"
                component={Link}
                to="/about">
                Learn more about me
              </Button>

              <Button
                variant="contained"
                color="secondary"
                component={Link}
                to="/projects">
                Explore my projects
              </Button>
            </Stack>
          </Stack>
        </Stack>

        <AboutThisWebsite />
      </Stack>
    </Container>
  );
};

export default Home;
