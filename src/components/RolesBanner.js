import React, { useEffect } from 'react';
import { useState } from 'react';
import { Stack, Typography } from '@mui/material';
import '../App.css';


export default function RolesBanner() {
    const funRoles =['Bookworm', 'Gamer', 'Bug Enthusiast', 'Cross-Stitcher', 'Amateur Birder', 'TTRPG Player'];
    const [shownFunRole, setShownFunRole] = useState(funRoles[0]);
    
    useEffect(() => {
        const randomIndex = Math.floor(Math.random() * funRoles.length);
        setShownFunRole(funRoles[randomIndex]);
    }, []);

    return (
        <Stack direction='row' alignItems={'center'} justifyContent={'space-around'}>
            <Typography variant="button"> 
                User Researcher
            </Typography>

            <Typography variant="button"> 
                UX Designer
            </Typography>

            <Typography variant="button" sx={{animation: 'fade-in 1s'}}> 
                {shownFunRole}
            </Typography>
        </Stack>
    );
}