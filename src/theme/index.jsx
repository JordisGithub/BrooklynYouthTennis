import { createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    white: 'white',
    highlight: '#c1f7d5',
    main: '#354463',
  },
  breakpoints: {
    values: {
      xs: 0, // 0..319
      sm: 320, //320..767 - mobile
      md: 768, //768..1024 - tablet
      lg: 1025, //1025..1440 - desktop
      xl: 1441, //1441
    },
  },
  typography: {
    fontFamily: 'komet, sans-serif',
  }
});

export default theme;

