import React from 'react'
// import './Subscribe.css'
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
      [theme.breakpoints.down('md')]: {
        fontSize: '20px',
      },
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
      [theme.breakpoints.down('md')]: {
        width: '80%',
      },
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
  function Submit(e) {
    const formEle = document.querySelector("form")
    e.preventDefault()
    console.log('submitted')
}

  return (
    <div className={classes.subscribe}>
      <h1>Subscribe to stay up to date with all news and events.</h1>
      {/* <form name="submit-to-google-sheet"> */}
      <form onSubmit={(e) => Submit(e)}>
        <input className={classes.email_input} name="Name" type="text" placeholder="Name" required/>
        <input className={classes.email_input} name="Email" type="email" placeholder="email" required/>
        <button className={classes.subscribe_button} type="submit">Submit</button>
      </form>
      <span>Thank you for Subscribing</span>
    </div>
  )
}

export default Subscribe

//  <stripe-buy-button
//   buy-button-id="buy_btn_1NV6KiI2WadLprKhD5FbFxU1"
//   publishable-key="pk_test_51NV5m9I2WadLprKhXoLzP0JQyb6S5AAzSlWI3ehpsWbnpuerBsa1ul9L41cBlj5wOXEHV53CtNzQp7qy3gsjYx9k00fyppbNoE"
// >Donate
//         </stripe-buy-button>
//         <stripe-buy-button
//       buy-button-id="'{{BUY_BUTTON_ID}}'"
//       publishable-key="pk_test_51NV5m9I2WadLprKhXoLzP0JQyb6S5AAzSlWI3ehpsWbnpuerBsa1ul9L41cBlj5wOXEHV53CtNzQp7qy3gsjYx9k00fyppbNoE"
//     ></stripe-buy-button> 