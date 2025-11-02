import Grid from '@mui/material/Grid2';
import React from 'react';
import { Container } from '@mui/material';
import ProjectCard from '../components/ProjectCard';
import FirstProjectCard from '../components/FirstProjectCard';

const Projects = () => {
    return (
        <Container style={{ display: 'flex', alignItems: 'center', minHeight: '80vh'}}>
            <Grid container spacing={1} justifyContent="left" rowSpacing={1} sx={{mb: 10}} >
                <Grid size={6}>
                    <FirstProjectCard />
                </Grid>
                <Grid size={6}>
                   <ProjectCard
                        title="Virtual Realms: How the Online Medium Affects Character Immersion in Remote Tabletop Role-Playing Games"                        // description="Conducted an in-depth qualitative study investigating how the online medium affects players’ character immersion in remote tabletop role-playing games (TTRPGs), under submission to CHI 2025."
                        image="/howpplplay.png"
                        alt="Virtual Realms"
                        date="2024"
                        origin="MSc HCI Dissertation"
                        colour="#F0B5B5"
                        skills="User Research, Academic Writing"
                        outcome="86%"
                    />
                </Grid>
                <Grid size={6}>
                    <ProjectCard
                        title="Verifone: Building Trust in the Second Hand Phone Market"
                        image="/verifone.png"
                        alt="Verifone"
                        date=""
                        origin="CHI 2024 Student Design Competition"
                        // link="https://dl.acm.org/doi/10.1145/3613905.3647975"
                        colour="#F0D9B5"
                        skills="UX Design, Academic Writing"
                        outcome="Finalist"
                    />
                </Grid>

                <Grid size={6}>
                    <ProjectCard
                        title="Designing a Web App for In-Situ Support of Parent-Child Conflict"
                        image="/dreamscape.png"
                        alt="Parent-Child Conflict"
                        date="2022"
                        origin="HCI Undergraduate Dissertation"
                        colour="#F0B5DF"
                        skills="UX Design, Frontend Development, Academic Writing"
                        outcome="83%"
                    />
                </Grid>

                <Grid size={6}>
                    <ProjectCard
                        title="Aival Medical AI Comparison Tool"
                        image="/dreamscape.png"
                        alt="Parent-Child Conflict"
                        date="2022"
                        origin="HCI Undergraduate Dissertation"
                        colour="#F0B5DF"
                        skills="UX Design, Frontend Development, Academic Writing"
                        outcome="83%"
                    />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Projects;