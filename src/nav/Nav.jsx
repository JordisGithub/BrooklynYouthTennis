import React from 'react'
import Logo from '../images/logo.JPG'
import { makeStyles } from '@mui/styles';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';


const useStyles = makeStyles({
  root: {
  },
  navbar: {
    display: 'flex',
    flexDirection: 'row',
  },
  brandTitle: {
    margin: '1rem',
    height: '80px',
  },
  navbarLinks: {
    margin: 'auto',
    textDecoration: 'none',
    color: '#354463',
    textTransform: 'uppercase',
    fontSize: '14px',
    fontFamily: 'komet, sans-serif',
    fontWeight: '400',
    padding: '5px',
    '&:hover': {
      backgroundColor: '#c1f7d5',
    },
  },
  navbarButton: {
    borderRadius: '25px',
    backgroundColor: '#c1f7d5',
    margin: 'auto',
    textDecoration: 'none',
    padding: '15px 30px',
    color: '#354463',
    fontFamily: 'PoynterOSDisp, sans-serif',
    fontSize: '18px',
    fontWeight: '800',
  }
});




function Nav() {
  const classes = useStyles();

  return (
    <List className={classes.navbar} >
        <ListItem><a href="/"><img src={Logo} className={classes.brandTitle} alt="byta" /></a></ListItem>
        <ListItem><a className={classes.navbarLinks} href="/about" >About Us</a></ListItem>
        <ListItem><a className={classes.navbarLinks}href="/Programs" >Our Programs</a></ListItem>
        <ListItem><a className={classes.navbarLinks} href="/getinvolved" >Get Involved</a></ListItem>
        <ListItem><a className={classes.navbarLinks} href="/contactus" >Contact Us</a></ListItem>
      <ListItem><a className={classes.navbarButton} href="https://www.paypal.me/brooklynyouth" target="_blank" rel="noreferrer">Support Us</a></ListItem>   
    </List>
  );
}

export default Nav;



