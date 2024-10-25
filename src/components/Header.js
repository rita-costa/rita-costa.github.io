
import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Stack from '@mui/material/Stack';
import { Tabs, Typography } from '@mui/material';

export default function Header() {
  const [value, setValue] = React.useState(
    () => {
      switch (window.location.pathname) {
        case '/about':
          return '2';
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
        <Box sx={{ width: '85%' }}>
            MUI Lab
        </Box>

        <Tabs 
          value={value}
          onChange={handleChange} 
          aria-label="lab API tabs example" 
          textColor="secondary"
          indicatorColor="secondary"
          >
          <Tab disableRipple href="/" label="Home" value="1" />
          <Tab disableRipple href="/about" label="About" value="2" />
        </Tabs>
    </Stack>
  );
}
