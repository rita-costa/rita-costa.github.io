import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

// A custom theme for this app
const theme = createTheme({
  cssVariables: true,
  palette: {
    primary: {
      main: '#B43065',
    },
    secondary: {
      main: '#B43065',
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    fontFamily: [
      // Atkinson Hyperlegible is more accessible 
      // see https://fonts.google.com/knowledge/readability_and_accessibility/introducing_accessibility_in_typography
      'Atkinson Hyperlegible',
      'Roboto',
      'Arial',
      'sans-serif',
    ].join(','),
  },
  // spacing: (factor) => `${0.25 * factor}rem`,
  // using h4 (34px), body1 (16px), button  (24px), and caption (12px) as base sizes
});

export default theme;