import { Button, Container, Stack, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import RolesBanner from '../components/RolesBanner';
import AboutThisWebsite from '../components/AboutThisWebsite';

const Home = () => {
    return (
        <Container>
        <Stack>
            <Stack direction='row' spacing={10} alignItems={'center'}>
                <img src="/head.png" alt="logo" style={{ height: '400px' }} />

                <Stack>
                    <Typography variant="h4" component="h2" gutterBottom align='left'>
                        Hi there! I'm Rita, a <b>UX researcher</b> with a background in software engineering, based in <b>London, UK</b>.
                        I'm passionate about creating <b>inclusive</b> and <b>meaningful</b> digital experiences.
                    </Typography>

                    <RolesBanner />

                    <Stack direction='row' spacing={3} alignItems={'center'}>
                        <Button variant="contained" color="secondary" component={Link} to='/about'>
                            Learn more about me
                        </Button>

                        <Button variant="contained" color="secondary" component={Link} to='/projects'>
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