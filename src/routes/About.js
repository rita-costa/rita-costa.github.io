import React from 'react';
import RolesBanner from '../components/RolesBanner';
import { Stack, Typography } from "@mui/material";
import cv from "../assets/RitaCosta.pdf";

export default function About () {
    return (
        <Stack alignItems={'center'}>
            <Stack direction='column' spacing={5} alignItems={'center'} width={'80%'}>
                <Typography variant="h4" component="h2" align="left">
                    About
                </Typography>

                <div style={{textAlign: 'left'}}>
                I'm a UX researcher and designer with a background in software engineering, who recently completed a Human-Computer Interaction MSc at UCL.
                I'm passionate about building accessible, inclusive, and meaningful digital experiences, with a special interest in games and mental health.
                With experience in front-end web development and a Computer Science degree, I bring a unique perspective to UX that I'm eager to expand! 🪴
                </div>

                <RolesBanner />

                <object width="65%"  height="800rem" data={cv} type="application/pdf" aria-label='aa' style={{marginBottom: '50px'}} />
            </Stack>
        </Stack>
    );
};
