// import { createTheme } from '@material-ui/core/styles';
import breakpoints from './breakpoints';
import { colors } from './colors';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { orange } from '@mui/material/colors';

const theme = createTheme({
  status: {
    danger: orange[500],
  },
  palette: {
    white: 'white',
    highlight: '#c1f7d5',
    main: '#354463',
  },
});

export default theme;

