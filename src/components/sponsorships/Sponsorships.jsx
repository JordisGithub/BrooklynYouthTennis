import React from 'react'
import { makeStyles } from '@mui/styles';


const useStyles = makeStyles((theme) => ({
  sponsorships: {
    backgroundImage: 'linear-gradient(rgba(70, 66, 159, 0.5), rgba(187, 43, 107, 0.5)), url("https://i.imgur.com/c5nkh6E.jpg")',
    width: '100vw',
    backgroundSize: 'cover',
  },
  
  sponsorships_title: {
    fontFamily: 'komet, sans-serif',
    fontSize: '12px',
    fontWeight: 400,
    color: '#354463',
    backgroundColor:' white',
    textTransform: 'uppercase',
    padding: '10px 25px',
    letterSpacing: '2px',
    margin: 'auto',
    width: 'max-content',
    zIndex: 10,
  },
  
  sponsorships_description: {
    fontFamily: 'PoynterOSDisp, sans-serif',
    fontSize: '20px',
    color: 'white',
    width: '90%',
    margin: 'auto',
    marginTop:' 20px',
    [theme.breakpoints.up('md')]: {
      fontSize: '44px',
      paddingTop: '30px',
    },
  },
  
  sponsorships_logos: {
    width: '90%',
    display: 'flex',
    margin: 'auto',
    marginTop: '20px',
    justifyContent: 'space-evenly',
  },
  
  sponsor1: {
    backgroundImage: 'url("https://i.imgur.com/1Ylb1xc.png")',
    width: '200px',
    height: '100px',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
      [theme.breakpoints.up('md')]: {
        width: '350px',
        height: '200px',
      },
    },
  sponsor2: {
    backgroundImage: 'url("https://i.imgur.com/fcuFe1p.png")',
    width: '200px',
    height: '100px',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
      [theme.breakpoints.up('md')]: {
        width: '350px',
        height: '200px',
      },
    },
}))


 const Sponsorships = () => {
  const classes = useStyles();
  return (
    <div className={classes.sponsorships}>
      <div className={classes.sponsorships_title}>Our Corporate Sponsors</div>
      <div className={classes.sponsorships_description}>You’re in good company when you partner with BYTA. Our partners are an elite group of forward thinking organizations who demonstrate their corporate responsibility by supporting New York City’s kids.</div>
      <div className={classes.sponsorships_logos}>
        <div className={classes.sponsor1}></div>
        <div className={classes.sponsor2}></div>
      </div>
    </div>
  )
 }

 export default Sponsorships
