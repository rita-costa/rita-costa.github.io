import React from 'react';
import { Container, Typography } from '@mui/material';
import GameCard from '../components/GameCard';
import Grid from '@mui/material/Grid2';

const Games = () => {
    return (
        <Container style={{ display: 'flex', alignItems: 'center', minHeight: '80vh' }}>
            <Grid container spacing={2} justifyContent="center" rowSpacing={5}>
                <Grid size={6}>
                    <GameCard
                        title="DreamScape"
                        description="A text-based adventure game made with Java. The player navigates through a dream world, collecting special items, to find a way back to reality."
                        image="/dreamscape.png"
                        alt="DreamScape"
                        link="https://github.com/rita-costa/dreamscape-game"
                        language="Java"
                        date="2020"
                        origin="BSc Computer Science Assignment"
                        colour="#F0B5DF"
                    />
                </Grid>
                <Grid size={6}>
                    <GameCard
                        title="Dragon Game"
                        description="A text-based battle game made with Python. The player battles dragons with their own dragon, using different attacks and strategies."
                        image="/dragon.png"
                        alt="Dragon Game"
                        link="https://github.com/rita-costa/dragon-game"
                        language="Python"
                        date="2016"
                        origin="High School Computer Science Project"
                        colour="#F0D9B5"
                    />
                </Grid>

                <Grid size={12}>
                    <Typography variant="h6" align="center">
                        Why are these games here?
                    </Typography>

                    <Typography variant="body1" align="center">
                        While I am not a game developer, I have always enjoyed creating games as a creative practice and to develop my programming skills.
                        Throughout my life, games have been powerful tools for meaningful experiences and storytelling, which is why I am interested in the field.
                    </Typography>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Games;