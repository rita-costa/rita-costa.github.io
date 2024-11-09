import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

// A custom theme for this app
const theme = createTheme({
  cssVariables: true,
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#FFD166',
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    fontFamily: [
      // was Exo but Lexend or Atkinson Hyperlegible are more accessible 
      // see https://fonts.google.com/knowledge/readability_and_accessibility/introducing_accessibility_in_typography
      'Atkinson Hyperlegible',
      'Roboto',
      'Arial',
      'sans-serif',
    ].join(','),
  },
  // spacing: (factor) => `${0.25 * factor}rem`, 
});

export default theme;