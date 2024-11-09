import { Stack, Typography } from "@mui/material";




export default function AboutThisWebsite() {

    return (
        <Stack>
            <Typography
                variant="h2"
                align='left'
                gutterBottom                
            >
                About this website
            </Typography>

            <Typography variant="body1" align='left' gutterBottom>
                This website was built using React and Material-UI.
                It uses the <b>Atkinson Hyperlegible</b> font for better readability and accessibility.
            </Typography>
        </Stack>

    )
}