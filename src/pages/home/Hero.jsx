import React from 'react'
import { makeStyles } from '@mui/styles';
import HeroImage from '../../images/byta_group_lesson.jpg';
import { Grid, Box } from '@mui/material';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { orange } from '@mui/material/colors';
import theme from '../../theme';
import Skeleton from '@mui/material/Skeleton';
import { keyframes } from '@emotion/react'

// const theme = createTheme({
//   status: {
//     danger: orange[500],
//   },
// });

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100vw',
    overflow: 'hidden',
    height: '600px',
    padding: '30px',
    backgroundColor: 'forestgreen',
    // backgroundBlendMode: 'multiply',
    backgroundImage: `url(${HeroImage})`,
    backgroundRepeat: 'no-repeat',
    // position: 'relative',
    // [theme.breakpoints.up('md')]: {
      //   height: '600px',
      // },
    },
    hero: {
      // outline: 'red 3px solid',
      // animation: 'heart 0.6s linear infite',
      // animation: `$myEffectExit 3000ms ${theme.transitions.easing.easeInOut}`,
      outline: 'red 3px solid',
      boxShadow: '0 0 8px 8px white inset',
      
      '&:after': {
        content: '"pat 2content"',
        // height: '100px',
      //  width: '100px',
      //  background: 'red',
        fontSize: '40px',
      },
  },
  heroImage: {
    //   backgroundImage: `url(${HeroImage})`,
    //   backgroundPosition: '30% 40%',
    //   background: 'linear-gradient(black, white) center no-repeat',
    boxShadow: '-10px 10px 90px 0 red',
    // box-shadow: 0 0 8px 8px white inset,
      // transform: 'scale(1)',
    // animation: 'pulse 2s infinite',
    //   width: '80%',
    // '& :after': {
    //   outline: 'red 3px solid',
    //   content: '"some content"',
    //   height: '100px',
    //   width: '100px',
    //   background: 'red',
    // },
    },
  heroTextBlock: {
    outline: 'blue 3px solid',
    transform: 'skew(20deg)',
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
    // fontFamily: 'poynterOSDis, sans-serif',
    // backgroundColor: 'white',
    // color: '#354463',
    // fontSize: '4vw',
    // fontWeight: '900',
    // padding: '25px 10px',
    // marginTop: '-15px',
    // marginLeft: '20px',
    // width: '30vw',
    // [theme.breakpoints.up('md')]: {
    //   padding: '35px 20px',
    // },
  },
  heart: {

    color: '#f20044',
    backgroundColor: '#f20044',
    position: 'relative',
    boxShadow: '-10px 10px 90px #f20044',
    transform: 'rotate(-45deg)',
    // animation: 'heart 1s linear infinite',
    // '&@keyframes heart':{
    //   '0%': {
    //     transform: 'rotate(-45deg) scale(1)',
    //   },
    //   '10%': {
    //     transform: 'rotate(-45deg) scale(1.1)',
    //   },
    // },
 
    '&:before': {
      content: '""',
      position: 'absolute',
      height: '70px',
      width: '70px',
      background: '#f20044',
      top: '-50%',
      borderRadius: '50px',
      boxShadow: '-10px -10px 90px #f20044',
    },
    '&:after': {
      content: '" "',
      position: 'absolute',
      height: '70px',
      width: '70px',
      background: '#f20044',
      right: '-50%',
      borderRadius: '50px',
      boxShadow: '10px 10px 90px #f20044',
    },
  },
}));

const wave = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(-5deg);
  }`

function Hero(props) {
  const classes = useStyles();
  return (
    <Box className={classes.root}>

              <Box
                  {...props}
                  sx={{
                    animation: `${wave} 0.5s linear infinite alternate`,
                    animationDuration: '1s',
                    animationFillMode: 'backwards',
                    bgcolor: '#f20044',
                    width: '70px',
                    height:  '70px',
                  }}
                />
      {/* <div className={classes.hero}>  
        <img src={HeroImage} alt="child plays tennis in brooklyn" className={classes.heroImage} />
      </div> */}
      {/* <div className={classes.heart} /> */}
      {/* <Skeleton variant="rectangular" className={classes.heart} sx={{ bgcolor: '#f20044' }} width={70} height={70} /> */}

      <div className={classes.heroTextBlock}>
          <h2 className={classes.heroTitle}>The motto</h2>
          <div className={classes.heroSlogan}>Talk with your racquet, play with your heart.</div>
       </div>
    </Box>
  );
}

export default Hero;