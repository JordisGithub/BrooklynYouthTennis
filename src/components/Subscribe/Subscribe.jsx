import React, { useState } from "react";
import { makeStyles } from '@mui/styles';
import { GoogleSpreadsheet } from 'google-spreadsheet'

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

  const [formData, setFormData] = useState({})

  const {
    REACT_APP_PRIVATE_KEY,
    REACT_APP_CLIENT_EMAIL,
    REACT_APP_SPREADSHEET_ID,
    REACT_APP_SHEET_ID
  } = process.env

  const doc = new GoogleSpreadsheet(REACT_APP_SPREADSHEET_ID);

  const appendSpreadsheet = async (row) => {
    console.log(REACT_APP_CLIENT_EMAIL);
    try {
      await doc.useServiceAccountAuth({
        client_email: REACT_APP_CLIENT_EMAIL,
        private_key: REACT_APP_PRIVATE_KEY,
      });
      await doc.loadInfo();
      console.log(doc.loadInfo());
      const sheet = doc.sheetsById[REACT_APP_SHEET_ID];
      const result = await sheet.addRow(row);
      return result;
    } catch (e) {
      console.error("Error: ", e);
    }
  };

  const handleInputChange = (event) =>{
    setFormData({...formData,[event.target.name]:event.target.value})
  }

  const handleSubmit = (event) =>{
    event.preventDefault()
    appendSpreadsheet(formData)
    console.log(formData)
  }

  return (
    <div className={classes.subscribe}>
      <h1>Subscribe to stay up to date with all news and events.</h1>
      <form onSubmit={handleSubmit}>
        <input className={classes.email_input} name="name" type="text" placeholder="Enter your name" required onChange={handleInputChange} />
        <input className={classes.email_input} name="email" type="email" placeholder="Enter your email" required onChange={handleInputChange} />
        <button className={classes.subscribe_button} type="submit">Submit</button>
      </form>
      <span>Thank you for Subscribing</span>
    </div>
  )
}

export default Subscribe
