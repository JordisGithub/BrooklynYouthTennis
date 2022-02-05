import React from 'react'
import { makeStyles } from '@mui/styles';
import HeroImage from '../../images/city_tennis_hero.png';
import { Grid, Box } from '@mui/material';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { orange } from '@mui/material/colors';
import theme from '../../theme';

// const theme = createTheme({
//   status: {
//     danger: orange[500],
//   },
// });

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100vw',
    overflow: 'hidden',
    height: '400px',
    position: 'relative',
    [theme.breakpoints.up('md')]: {
      height: '700px',
    },
    
  },
  heroImage: {
    width: '800px',
    position: 'absolute',
    left: '-250px',
    [theme.breakpoints.up('md')]: {
      width: '50vw',
      left: '0',
    },
    [theme.breakpoints.up('lg')]: {
      width: '100vw',
      left: '0',
      // width: '100vw',s
      // objectFit: 'cover',
      // overflow: 'hidden',
      // height: '500px',
    },
  },
  heroTextBlock: {
    position: 'absolute',
    top: '150px',
    [theme.breakpoints.up('md')]: {
      position: 'absolute',
      top: '200px',
    },
  },
  heroTitle: {
    fontFamily: 'komet, sans-serif',
    fontSize: '12px',
    fontWeight: '200',
    backgroundColor: theme.palette.main,
    color: theme.palette.white,
    textTransform: 'uppercase',
    padding: '10px 25px',
    textAlign: 'center',
    display:'table-cell',
    verticalAlign: 'middle',
    position: 'relative',
    left: '20px',
    letterSpacing: '2px',
  },
  
  
  heroSlogan: {
    fontFamily: 'poynterOSDis, sans-serif',
    backgroundColor: 'white',
    color: '#354463',
    fontSize: '4vw',
    fontWeight: '900',
    padding: '25px 10px',
    marginTop: '-15px',
    marginLeft: '20px',
    width: '30vw',
    [theme.breakpoints.up('md')]: {
      padding: '35px 20px',
    },
  },
}));

function Hero() {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Grid container spacing={3} alignItems="stretch" >
        <Grid item xs={12} sm={4}>
            <img src={HeroImage} alt="child plays tennis in brooklyn" className={classes.heroImage}/>
            <div className={classes.heroTextBlock}>
              <h2 className={classes.heroTitle}>The motto</h2>
              <div className={classes.heroSlogan}>Talk with your racquet, play with your heart.</div>
            </div>
        </Grid>
        </Grid>
      </Box>
  );
}

export default Hero;