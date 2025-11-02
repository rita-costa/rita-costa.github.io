import { Stack, Typography } from "@mui/material";

export default function FirstProjectCard({}) {

    return (
        <Stack sx={{ minHeight: 400, minWidth: 275, p: 1  }}>
            <Typography variant="h4" component="h2" align="left">
                Explore some of my work →
            </Typography>
        </Stack>
    );
}