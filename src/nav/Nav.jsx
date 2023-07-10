import React from 'react'
import Logo from '../images/logo.JPG'
import { makeStyles } from '@mui/styles';
import ListItem from '@mui/material/ListItem';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';


const useStyles = makeStyles((theme) => ({
  root: {
    '&.MuiPaper-root': {
       backgroundColor: 'white',
    },
  },
  navbar: {
    display: 'flex',
    flexDirection: 'row',
  },
  logo: {
    height: '50px',
    margin: '1rem',
    [theme.breakpoints.up('sm')]: {
      margin: '1rem',
      height: '80px',
    },
  },
  navbarLinks: {
    '&.MuiButton-root': {
      textDecoration: 'none',
      color: '#354463',
      fontSize: '14px',
      fontFamily: 'komet, sans-serif',
      '&:hover': {
        backgroundColor: '#c1f7d5',
      },  
      '&:last-child': {
        borderRadius: '25px',
        backgroundColor: '#c1f7d5',
        margin: 'auto',
        textDecoration: 'none',
        padding: '15px 30px',
        color: '#354463',
        fontFamily: 'PoynterOSDisp, sans-serif',
        fontSize: '14px',
        fontWeight: '800',
      },
    },
  },
}));

const pages = [
  <ListItem><a href="/about" >About Us</a></ListItem>,
  <ListItem><a href="/Programs" >Our Programs</a></ListItem>,
  <ListItem><a href="/getinvolved" >Get Involved</a></ListItem>,
  // <ListItem><a href="/contactus" >Contact Us</a></ListItem>,
  <ListItem><a href="https://www.paypal.me/brooklynyouth" target="_blank" rel="noreferrer">Support Us</a></ListItem>
];


function Nav() {
  const classes = useStyles();

  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <>
      <AppBar position="static" classes={{ root: classes.root}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            <a href="/"><img src={Logo} className={classes.logo} alt="byta" /></a>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
              >
                {/* burger menu */}
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}  >
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            <a href="/"><img src={Logo} className={classes.logo} alt="byta" /></a>
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'black', display: 'block' }}
                className={classes.navbarLinks}
              >
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    </>
  );
}

export default Nav;



