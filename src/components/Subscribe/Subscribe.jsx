import React, { useState } from "react";
import { TextField, Button, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { GoogleSpreadsheet } from 'google-spreadsheet'

const useStyles = makeStyles((theme) => ({
  subscribe: {
    backgroundColor: '#C1F7D5',
    padding: '10px 30px',
    alignItems: 'center',
    [theme.breakpoints.up('md')]: {
      padding: '50px',
    },
    '& h1': {
      fontFamily: 'PoynterOSDisp, sans-serif',
      color: '#354463',
      padding: '20px',
      fontSize: '20px',
      textAlign: 'center',
      margin: 'auto',
      [theme.breakpoints.up('md')]: {
        fontSize: '40px',
      },
    },
    '& #msg': {
      fontSize: '18px',
      fontFamily: 'PoynterOSDisp, sans-serif',
      color: '#940C1C',
      textAlign: 'center',
      [theme.breakpoints.up('md')]: {
        fontSize: '30px',
      },
    },
    },
  inputs: {
    display: 'grid',
    gridGap: '8px',
    alignItems: 'center',
    width: '400px',
    margin: 'auto',
    [theme.breakpoints.up('md')]: {
      width: '500px',
    },
    },
    subscribe_button: {
      height: '48px',
    }
}))

const Subscribe = () => {
  const classes = useStyles();

  const [formData, setFormData] = useState({})
  const msg = document.getElementById("msg")

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
    msg.innerHTML = "Thank you for Subscribing!"
    setTimeout(() => {
      msg.innerHTML = ""
    }, 8000);
  }

  return (
    <div className={classes.subscribe}>
      <h1>Subscribe to stay up to date with all news and events.</h1>
      <form onSubmit={handleSubmit}>
        <div className={classes.inputs} >  
          <TextField id="outlined-basic" label="Name" variant="filled" name="name" required onChange={handleInputChange} />
          <TextField id="outlined-basic" label="Email" variant="filled" name="email" required onChange={handleInputChange} />
          <Button className={classes.subscribe_button} variant="contained" type="submit">Submit</Button>
        </div>
      </form>
      <Typography id="msg"></Typography>
    </div>
  )
}

export default Subscribe
