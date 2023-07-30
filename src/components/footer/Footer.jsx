import React from 'react'
import { Link } from 'react-router-dom';
import { styled } from '@mui/system';
import { MenuItem, Button, Container, Menu, Typography, IconButton, Toolbar, Box, AppBar, ListItem } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const StyledFooter = styled(Container)(({ theme }) => ({
  padding: '20px',
  textAlign: 'center',
  margin: 'auto',
  fontFamily: 'komet, sans-serif',
  color: '#354463',
  [theme.breakpoints.up('md')]: {
    padding: '50px',
  },
  '& h1': {
    fontFamily: 'komet, sans-serif',
    color: '#354463',
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'contents',
    },
  },
   '& h4': {
      [theme.breakpoints.up('md')]: {
        fontSize: '20px',
      },
    },

  '& .BYTAfooter-linksContainer': {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gridGap: '20px',
    justifyItems: 'center',
    [theme.breakpoints.up('md')]: {
      margin: '30px 0',
      gridTemplateColumns: '1fr 1fr 1fr',
    },
  },
  '& .copyright-text': {
    margin: 'auto',
    textAlign: 'center',
    [theme.breakpoints.up('md')]: {
      padding: '70px 0 50px',
    },
  },

  '& .BYTAfooter-links,.BYTAfooter-contact, .BYTAfooter-footerLinks': {
    display: 'flex',
    flexDirection: 'column',
  },
  '& .BYTAfooter-socialIcons': {
    textAlign: 'center',
    margin: 'auto',
    '& a': {
      color: '#354463',
    },
  },
}));


const Footer = () => {

  return (
    <StyledFooter component="footer" disableGutters maxWidth="false">
      <h1>Brooklyn Youth Tennis Association</h1>

      <div class="BYTAfooter-linksContainer">
        <div class="BYTAfooter-links">
          <h4>Contact Us</h4>
            <span>Brooklyn, NY</span>
            <span>(718) 789-5084</span>
            <span>brooklynyoouthtennis@gmail.com</span>
        </div>
        <div className="BYTAfooter-links">
          <h4>BYTA</h4>
          <Link><a href="">About Us</a></Link>
          <Link><a href="">Get Involved</a></Link>
          <Link><a href="">Donate Here</a></Link>
        </div>
        <div className="BYTAfooter-socialIcons">
          <h4>Follow Us</h4>
          <div>
            <IconButton><a href="#"><FacebookIcon /></a></IconButton>
            <IconButton><a href="#"><InstagramIcon /></a></IconButton>
            <IconButton><a href="#"><LinkedInIcon /></a></IconButton>
            <IconButton><a href="#"><TwitterIcon /></a></IconButton>
          </div>
        </div>       
      </div>

      <div>
        <Typography variant="body2" color="text.secondary" align="center">
          {"Copyright © "}
          <Link color="inherit" href="https://www.brooklynyouthtennis.org/">
            Brooklyn Youth Tennis
          </Link>{" "}
          {new Date().getFullYear()}
          {"."}
        </Typography>
      </div>
  </StyledFooter>
);
}

export default Footer;



