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
                        description="A text-based adventure game where the player navigates through a dream world, collecting special items to find a way back to reality before they lose their strength."
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
                        description="A text-based battle game inspired by Pokemon and How to Train Your Dragon, the player controls their own dragon to defeat others and reach the final island."
                        image="/dragon.png"
                        alt="Dragon Game"
                        link="https://github.com/rita-costa/dragon-game"
                        language="Python"
                        date="2016"
                        origin="High School Computer Science Project"
                        colour="#F0D9B5"
                    />
                </Grid>

                <Grid size={12} align="left">
                    <Typography variant="h6" >
                        Why are these games here?
                    </Typography>

                    <Typography variant="body1">
                        While I am not a game developer, I have always enjoyed coding games as a creative practice and to develop my programming skills.
                        Throughout my life, games have been powerful tools for meaningful reflection and storytelling, which is why I am interested in the field.
                    </Typography>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Games;