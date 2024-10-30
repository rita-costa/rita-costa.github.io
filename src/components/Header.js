
import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Stack from '@mui/material/Stack';
import { Tabs } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const location = useLocation();

  const [value, setValue] = React.useState(
    () => {
      switch (location.pathname) {
        case '/about':
          return '2';
        case '/projects':
          return '3';
        case '/games':
          return '4';
        default:
          return '1';
      }
    }
  );

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Stack direction='row' sx={{ width: '100%', typography: 'body1' }}>
        <Box sx={{ width: '20%' }}>
            MUI Lab
        </Box>

        <Tabs 
          value={value}
          onChange={handleChange} 
          aria-label="lab API tabs example" 
          textColor="secondary"
          indicatorColor="secondary"
        >       
          <Tab
            disableRipple
            component={Link}
            to="/"
            label="Home"
            value="1"
          />
          <Tab
            disableRipple
            component={Link}
            to="/about"
            label="About Me"
            value="2"
          />
          <Tab
            disableRipple
            component={Link}
            to="/projects"
            label="My Work"
            value="3"
          />
          <Tab
            disableRipple
            component={Link}
            to="/games"
            label="Games"
            value="4"
          />
        </Tabs>
    </Stack>
  );
}
