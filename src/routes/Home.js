import { Button, Container, Stack, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import RolesBanner from '../components/RolesBanner';

const Home = () => {
    return (
        <Container>
            <Stack direction='row' spacing={10} alignItems={'center'}>
                <img src="/head.png" alt="logo" style={{ height: '400px' }} />

                <Stack>
                    <Typography variant="h1" align='left'>
                        Hi there!
                    </Typography>
                    <Typography variant="h6" component="h2" gutterBottom align='left'>
                        I'm a <b>UX researcher</b> with a background in software engineering, based in <b>London, UK</b>.
                        I'm passionate about creating <b>inclusive</b> and <b>meaningful</b> digital experiences.
                    </Typography>

                    <RolesBanner />

                    <Stack direction='row' spacing={3} alignItems={'center'}>
                        <Button variant="contained" color="secondary" component={Link} to='/about'>
                            Learn more about me
                        </Button>

                        <Button variant="contained" color="secondary" component={Link} to='/about'>
                            Explore my projects
                        </Button>
                    </Stack>
                </Stack>
            </Stack>

        </Container>
    );
};

export default Home;