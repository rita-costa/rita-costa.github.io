
import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Stack from '@mui/material/Stack';
import { Tabs } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import theme from '../theme';
import { useEffect, useState } from 'react';

export default function Header() {
  const location = useLocation();
  const [value, setValue] = useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => { 
    setValue(
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
  }, [location.pathname]);

  return (
    <Stack direction='row' sx={{ width: '100%', typography: 'body1', justifyContent: 'space-between' }}>
      <Box sx={{ pl: theme.spacing(2), pt: theme.spacing(1) }} component={Link}
        to="/"
        onClick={(e) => handleChange(e, "1")} >
        <img 
        src="/name-logo.jpg" 
        alt="logo" 
        style={{ height: '50px' }}    
        />
      </Box>

      <Tabs 
      value={value}
      onChange={handleChange} 
      aria-label="lab API tabs example" 
      textColor="secondary"
      indicatorColor="secondary"
      sx={{ marginLeft: 'auto', alignItems: 'flex-end' }}
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
