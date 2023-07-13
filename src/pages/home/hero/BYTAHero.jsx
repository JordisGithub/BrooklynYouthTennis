import { makeStyles } from '@mui/styles';
import { keyframes } from '@emotion/react'
import { Stack, Grid } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';


// ----------------------------------------------------------------------
const useStyles = makeStyles((theme) => ({
  root: {
    padding: '35px',
    '& .MuiGrid-root': {
      display: 'flex',
      alignItems: 'center',
      [theme.breakpoints.up('md')]: {
        padding: '35px',
        height: 700,
      },
    },
  },
  heroTextBlock: {
    padding: '50px 25px 0px',
    '& .MuiSvgIcon-root': {
      animation: `${wave} 0.5s linear infinite alternate`,
      animationDuration: '1s',
      animationFillMode: 'backwards',
      color: '#f20044',
      width: '70px',
      height: '70px',
    },     
    },
    heroTitle: {
      fontFamily: 'komet, sans-serif',
      fontSize: '12px',
      fontWeight: '200',
      backgroundColor: theme.palette.main,
      color: theme.palette.white,
      textTransform: 'uppercase',
      padding: '10px 25px',
      textAlign: 'center',
      display:'table-cell',
      verticalAlign: 'middle',
      letterSpacing: '2px',
    },
    heroSlogan: {
      fontFamily: 'poynterOSDis, sans-serif',
      backgroundColor: 'white',
      color: '#354463',
      fontSize: '40px',
      fontWeight: '900',
      padding: '30px 0 0',
      [theme.breakpoints.up('md')]: {
        padding: '35px 0px',
         fontSize: '45px',
      },
      [theme.breakpoints.up('lg')]: {
        fontSize: '4vw',
      },
  },
  heroImage: {
    backgroundImage: 'url("https://i.imgur.com/11IZocT.jpg")',
    backgroundPosition: 'center',
    height: '500px',
    width: '40vw',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    margin: 'auto',
    [theme.breakpoints.down('md')]: {
      width: '100vw',
      height: '500px',
    },
    [theme.breakpoints.up('md')]: {
      width: '100vw',
      height: '700px',
    },
  },  
}))

// ----------------------------------------------------------------------

const wave = keyframes`
  from {
    transform: rotate(10deg);
  }
  to {
    transform: rotate(-10deg);
  }`

  // ----------------------------------------------------------------------

export const BYTAHero = () => {
  const classes = useStyles();
  return (     
          <Grid container spacing={2} className={classes.root}>
            <Grid item xs={12} md={6} lg={5}>
              <Stack>
                <div className={classes.heroTextBlock}>
                  <h2 className={classes.heroTitle}>The motto</h2>
                  <div className={classes.heroSlogan}>Talk with your racquet, play with your heart.fff</div>
                  <FavoriteIcon sx={{ animation: `${wave} 0.5s linear infinite alternate` }}/>
                  <FavoriteIcon sx={{ animation: `${wave} 0.5s linear infinite alternate` }}/>
                  <FavoriteIcon sx={{ animation: `${wave} 0.5s linear infinite alternate` }}/>
                  <FavoriteIcon sx={{ animation: `${wave} 0.5s linear infinite alternate` }}/>
                </div>           
              </Stack>
            </Grid>
            <Grid item xs={12} md={6} lg={7}>
              <div className={classes.heroImage}/>
            </Grid>
          </Grid>
  );
}

export default BYTAHero


