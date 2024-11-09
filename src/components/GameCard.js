import { Stack, Button, Card, CardMedia, CardContent, Typography, Chip } from "@mui/material";
import CodeIcon from '@mui/icons-material/Code';


export default function GameCard({title, description, image, alt, link, language, date, origin}) {

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
        <Card sx={{ minWidth: 275, pb: 5 }}>
            <CardMedia
                sx={{ height: 220}}
                image={image}
                title={alt}
            />
            <CardContent spacing='xs'>
                <Typography variant="h6">
                    {title}
                </Typography>

                <Stack>
                    <Typography variant="overline" >
                        {origin} - <b>{date}</b>
                    </Typography>
                    {/* <Typography variant="body1" gutterBottom>
                        {date}
                    </Typography> */}
                </Stack>
                
                <Chip size='small' icon={<CodeIcon />} label={language} color={chipColour(language)} sx={{mb: 2}} />
                
                <Typography variant="body2">
                    {description}
                </Typography>
            </CardContent>
            
            <Button size="small" href={link} target="_blank">Go to Repository</Button>
        </Card>
    );
}