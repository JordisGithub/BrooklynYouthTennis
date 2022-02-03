import React from 'react'
import { makeStyles } from '@mui/styles';
import HeroImage from '../../images/city_tennis_hero.png'


const useStyles = makeStyles({
  root: {},
  heroContainer: {
    // border: 'solid red 2pt',
    padding: 0,
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gridTemplateRows: '1fr 1fr 1fr',
    height: '500px',
    width: '100vw',
    justifyContent: 'stretch',
    overflow: 'hidden',
   
  },
  heroImage: {
    // border: 'solid blue 2pt',
    backgroundRepeat: 'no-repeat',
    // backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100vw',
    // objectFit: 'cover',
    overflow: 'hidden',
  },

  heroTextBlock: {
    // border: 'solid green 2pt',
    marginTop: '80px',
    gridColumnStart: 1,
    rowRowStart: 2,
    marginLeft: '20px',
  },
  heroTitle: {
    /* border: solid yellow 2pt; */
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
    // border: 'solid pink 2pt',
    fontFamily: 'poynterOSDis, sans-serif',
    backgroundColor: 'white',
    color: '#354463',
    fontSize: '4vw',
    fontWeight: '900',
    padding: '35px 20px',
    marginTop: '-15px',
    width: '28vw',
    // zIndex:' -1',
  },
});

function Hero() {
  const classes = useStyles();
  return (
    <>
    <div className={classes.heroContainer}>
      <img src={HeroImage} alt="child plays tennis in brooklyn" className={classes.heroImage}/>
        <div className={classes.heroTextBlock}>
          <h2 className={classes.heroTitle}>The motto</h2>
          <div className={classes.heroSlogan}>
            Talk with your racquet, play with your heart.
          </div>
        </div>
      </div>
      </>
  );
}

export default Hero;