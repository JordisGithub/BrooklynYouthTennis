import React from 'react'
import './Subscribe.css'
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  subscribe: {
    backgroundColor: '#C1F7D5',
    display: 'flex',
    flexDirection: 'column',
    padding: '50px',
    alignItems: 'center',
    '& h1': {
      fontFamily: 'PoynterOSDisp, sans-serif',
      color: '#354463',
      padding: '20px',
      fontSize: '40px',
      },
    },
    email_input: {
      height: '48px',
      margin: 'auto',
      border: '#354463 1pt solid',
      borderRadius: '18px',
      width: '352px',
      fontFamily: 'komet, sans-serif',
      color: '#354463',
      fontSize: '20px',
      marginBottom: '15px',
    },
    subscribe_button: {
      backgroundColor: '#354463',
      color: 'white',
      height: '48px',
      fontƒamily: 'PoynterOSDisp, sans-serif',
      fontSize: '18px',
      width: '160px',
      borderRadius: '18px',
      margin: 'auto',
    }
}))

const Subscribe = () => {
  const classes = useStyles();
  return (
    <div className={classes.subscribe}>
      <h1>Subscribe to stay up to date with all news and events.</h1>
      <input className={classes.email_input} type="text" placeholder="Enter your email address" name="mail" required></input>
      <button className={classes.subscribe_button} type="submit" value="Subscribe">Submit</button>
    </div>
  )
}

export default Subscribe