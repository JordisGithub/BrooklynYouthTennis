import { makeStyles } from '@mui/styles';
import { Typography } from '@mui/material';

// ----------------------------------------------------------------------
const useStyles = makeStyles((theme) => ({
  root: {
    background: `linear-gradient(to bottom, transparent 25%, #354463), url("https://i.imgur.com/Xl7YNyd.jpg") no-repeat center center`,
    backgroundSize: 'cover',
    height: '400px',
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      height: '600px',
    },
  },
  
  heroTextBlock: {
    width: '90%',
    display: 'flex',
    justifyContent: 'center',
    margin: 'auto',

    '& .MuiTypography-root': {
      fontFamily: 'komet, sans-serif',
      color: '#354463',
      fontSize: '30px',
        textTransform: 'uppercase',
        fontWeight: '900',
        WebkitTextFillColor: 'white',
        WebkitTextStrokeWidth: '2px',
      WebkitTextStrokeColor: '#354463',
        textAlign: 'center',
        [theme.breakpoints.up('md')]: {
          fontSize: '50px',
        },
    },
    
  },
}))


export const BYTAHero = () => {
  const classes = useStyles();
  return (     
          <div className={classes.root}>
            <div className={classes.heroTextBlock}>
              <Typography>BROOKLYN youth tennis association</Typography>
              {/* <Typography>Game, Set, Match! Brooklyn’s Youth Ace Their Skills with Free Tennis Lessons from BYTA</Typography> */}
            </div>           
          </div>
  );
}

export default BYTAHero


