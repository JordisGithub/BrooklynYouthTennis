import { makeStyles } from '@mui/styles';
import { Grid } from '@mui/material';

// ----------------------------------------------------------------------
const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.up('md')]: {
      padding: '35px',
    },
    '& .MuiGrid-root': {
      display: 'flex',
      alignItems: 'center',
    },
  },
  heroTextBlock: {
    padding: '50px 25px 0px',     
    },
    heroSlogan: {
      fontFamily: 'poynterOSDis, sans-serif',
      backgroundColor: 'white',
      color: '#354463',
      fontSize: '30px',
      fontWeight: '900',
      padding: '30px 0 0',
      [theme.breakpoints.up('md')]: {
        padding: '35px 0px',
         fontSize: '45px',
      },
      [theme.breakpoints.up('lg')]: {
        fontSize: '3vw',
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


export const BYTAHero = () => {
  const classes = useStyles();
  return (     
          <Grid container spacing={2} className={classes.root}>
            <Grid item xs={12} md={6} lg={5}>
                <div className={classes.heroTextBlock}>
                  <div className={classes.heroSlogan}>Game, Set, Match! Brooklyn’s Youth Ace Their Skills with Free Tennis Lessons from BYTA</div>
                </div>           
            </Grid>
            <Grid item xs={12} md={6} lg={7}>
              <div className={classes.heroImage}/>
            </Grid>
          </Grid>
  );
}

export default BYTAHero


