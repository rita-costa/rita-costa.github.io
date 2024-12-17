import Grid from '@mui/material/Grid2';
import React from 'react';
import { Container } from '@mui/material';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
    return (
        <Container style={{ display: 'flex', alignItems: 'center', minHeight: '80vh' }}>
            <Grid container spacing={2} justifyContent="center" rowSpacing={5} >
                <Grid size={6}>
                   <ProjectCard
                        title="Virtual Realms: How the Online Medium Affects Character Immersion in Remote Tabletop Role-Playing Games"
                        description="Conducted an in-depth qualitative study investigating how the online medium affects players’ character immersion in remote tabletop role-playing games (TTRPGs), under submission to CHI 2025."
                        image="/howpplplay.png"
                        alt="Virtual Realms"
                        date="2024"
                        origin="MSc HCI Dissertation, 86%"
                    />
                </Grid>
                <Grid size={6}>
                    <ProjectCard
                        title="Verifone: Building Trust in the Second Hand Phone Market"
                        description="In a group of 5, designed a platform to address phone e-waste, publishing an extended abstract in the ACM Digital Library as one of the top 12 submissions."
                        image="/dreamscape.png"
                        alt="Verifone"
                        date="2024"
                        origin="CHI 2024 Student Design Competition, Finalist"
                        link="https://dl.acm.org/doi/10.1145/3613905.3647975"
                        linkText="Read the Extended Abstract"
                    />
                </Grid>

                <Grid size={6}>
                    <ProjectCard
                        title="Designing a Web App for In-Situ Support of Parent-Child Conflict"
                        description="Designed and implemented a MERN stack web app to help parents teach young children problem-solving skills."
                        image="/dreamscape.png"
                        alt="Parent-Child Conflict"
                        date="2022"
                        origin="HCI Undergraduate Dissertation, 83%"
                    />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Projects;