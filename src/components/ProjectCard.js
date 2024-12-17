import { Stack, Button, Card, CardMedia, CardContent, Typography, Chip } from "@mui/material";
import CodeIcon from '@mui/icons-material/Code';


export default function GameCard({title, description, image, alt, date, origin, link, linkText}) {

    return (
        <Card sx={{ minWidth: 275, pb: 5 }}>
            <CardMedia
                sx={{ height: 220}}
                image={image}
                title={alt}
            />
            <CardContent spacing='xs' sx={{flexGrow: 1}}>
                <Typography variant="h6">
                    {title}
                </Typography>

                <Stack>
                <Typography variant="overline" >
                        <b>{date}</b>
                    </Typography>
                    <Typography variant="overline" >
                        {origin}
                    </Typography>
                </Stack>
                
                <Typography variant="body2">
                    {description}
                </Typography>
            </CardContent>
            
            {link && <Button size="small" href={link} target="_blank">{linkText}</Button>}
        </Card>
    );
}