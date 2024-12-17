import { Stack, Button, Card, CardMedia, CardContent, Typography, Chip, Box } from "@mui/material";
import CodeIcon from '@mui/icons-material/Code';


export default function GameCard({title, image, alt, date, origin, colour, skills, outcome}) {

    return (
        <Stack sx={{ minHeight: 400, minWidth: 275, p: 1, bgcolor: colour ? colour : 'primary.main'  }}>
            <img src={image} alt={alt} style={{height: 220, width: '100%', objectFit: 'cover'}} />
            <Stack direction="column" spacing={2} sx={{
                justifyContent: "space-between",
                alignItems: "flex-start",
                flexGrow: 1,
                p: 1
            }}>
                <Typography variant="h6" align="left">
                    {title}
                </Typography>
                
                <Stack>
                    <Typography variant="body2" align="left">
                        {origin}{date ? ", " : ""} {date}
                    </Typography>
                    <Typography variant="body2" align="left">
                        {outcome}
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