import React from 'react'
import { makeStyles } from '@mui/styles';
import HeroImage from '../../images/city_tennis_hero.png';
import { Grid } from '@mui/material';


const useStyles = makeStyles({
  root: {},
  heroImage: {
    backgroundPosition: 'center',
    width: '100vw',
    objectFit: 'cover',
    overflow: 'hidden',
  },
  heroTextBlock: {
    position: 'absolute',
    top: '200px',
  },
  heroTitle: {
    fontFamily: 'komet, sans-serif',
    fontSize: '12px',
    fontWeight: '200',
    backgroundColor: '#354463',
    color: 'white',
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
    padding: '35px 20px',
    marginTop: '-15px',
    width: '28vw',
  },
});

function Hero() {
  const classes = useStyles();
  return (
    <>
  
      <Grid container spacing={3} alignItems="stretch">
        <Grid item xs={12} sm={4}>
            <img src={HeroImage} alt="child plays tennis in brooklyn" className={classes.heroImage}/>
            <div className={classes.heroTextBlock}>
              <h2 className={classes.heroTitle}>The motto</h2>
              <div className={classes.heroSlogan}>Talk with your racquet, play with your heart.</div>
            </div>
        </Grid>
    </Grid>
      </>
  );
}

export default Hero;