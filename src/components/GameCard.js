import { Stack, Button, Card, CardMedia, CardContent, Typography, Chip } from "@mui/material";
import CodeIcon from '@mui/icons-material/Code';


export default function GameCard({title, description, image, alt, link, language, date, origin, colour}) {

    const chipColour = (language) => {
        switch (language) {
            case 'Java':
                return 'primary';
            case 'Python':
                return 'secondary';
            default:
                return 'primary';
        }
    }

    return (
        <Stack sx={{ minHeight: 400, minWidth: 275, p: 1, bgcolor: colour ? colour : 'primary.main'  }}>
            <img src={image} alt={alt} style={{height: 220, width: '100%', objectFit: 'cover'}} />
            <Stack direction="column" spacing={2} sx={{
                justifyContent: "space-between",
                alignItems: "flex-start",
                flexGrow: 1,
                p: 1
            }}>

                <Stack direction='row' spacing={1}>
                <Typography variant="h6" component="h2" align="left">
                    {title}
                </Typography>
                <Chip size='small' icon={<CodeIcon />} label={language} color={chipColour(language)} />
                </Stack>
                
                <Stack>
                    <Typography variant="body2" align="left">
                        <b>{origin}{date ? ", " : ""} {date}</b>
                    </Typography>
                    <Typography variant="body2" align="left">
                    {description}
                    </Typography>
                </Stack>
                
                <Button size="small" href={link} target="_blank">Go to Repository</Button>
            </Stack>
        </Stack>
    );
}