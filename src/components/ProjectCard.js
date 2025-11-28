import { Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function ProjectCard({
  title,
  image,
  alt,
  date,
  origin,
  colour,
  skills,
  outcome,
  link,
}) {
  return (
    <Stack
      sx={{
        minHeight: 450,
        minWidth: 275,
        p: 1,
        bgcolor: "#100326",
        borderRadius: "24px",
        border: "solid 2px #260D50",
        textDecoration: "none",
        // filter: "drop-shadow(2px 2px 8px #260D50)",
        ":hover": {
          filter: "drop-shadow(2px 2px 8px #58438B)",
        },
      }}
      component={Link}
      to={link ? link : ""}>
      <img
        src={image}
        alt={alt}
        style={{
          height: 220,
          width: "100%",
          objectFit: "cover",
          borderRadius: "18px",
        }}
      />
      <Stack
        direction="column"
        spacing={2}
        sx={{
          justifyContent: "space-between",
          alignItems: "flex-start",
          flexGrow: 1,
          p: 1,
        }}>
        <Typography variant="h6" align="left">
          <b>{title}</b>
        </Typography>

        <Stack>
          <Typography variant="body2" align="left">
            {origin}
            {date ? ", " : ""} {date}
          </Typography>
          <Typography variant="body2" align="left">
            <b>{skills}</b>
          </Typography>
        </Stack>
      </Stack>

      {/* {link && <Button size="small" href={link} target="_blank">{linkText}</Button>} */}
    </Stack>
  );
}
