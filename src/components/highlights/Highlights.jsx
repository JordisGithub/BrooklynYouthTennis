import React from 'react'
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  highlightsTitle: {
    fontFamily: 'komet, sans-serif',
    fontSize: '12px',
    fontWeight: 200,
    backgroundColor: '#354463',
    color: 'white',
    textTransform: 'uppercase',
    padding: '10px 25px',
    letterSpacing: '2px',
    width: 'max-content',
    margin: 'auto',
  },
  highlights: {
    backgroundColor: '#c1f7d5',
    paddingBottom: '20px',
    [theme.breakpoints.up('md')]: {
      paddingBottom: '40px',
    },
  },
  highlightsGrid: {
    width: '90%',
    display: 'grid',
    gridTemplateColumns: '1fr',
    margin: 'auto',
    paddingTop: '40px',
    gridGap: '20px',
    [theme.breakpoints.down('lg')]: {
      paddingTop: '20px',
    },
    [theme.breakpoints.up('md')]: {
      gridTemplateColumns: 'repeat(3, 1fr)',
    },
  },
  highlightsGridWrapper: {
    display: 'flex',
    flexDirection: 'column',
    '& h1': {
      fontFamily: 'PoynterOSDisp, sans-serif',
      color: '#354463',
      fontSize: '14px',
      fontWeight: 600,
      height: 'auto',
      letterSpacing: '0.6px',
      textAlign: 'center',
      [theme.breakpoints.up('md')]: {
        fontSize: '18px',
      },
      [theme.breakpoints.up('lg')]: {
        fontSize: '20px',
      },
    },
    '& p': {
      fontSize: '14px',
      display: 'inline-flex',
      justifyContent: 'center',
      color: '#354463',
      fontWeight: 300,
      fontFamily: 'komet, sans-serif',
      margin: 'auto',
      width: '100%',
      height: 'auto',
      letterSpacing: '1px',   
      textAlign: 'center',
      [theme.breakpoints.up('lg')]: {
        marginTop: '10px',
        fontSize: '20px',
      },
    },
  },
}))

export const Highlights = () => {
  const classes = useStyles();
  return (
    <div className={classes.highlights}>
      <div className={classes.highlightsTitle}>Play Tennis</div>

      <div className={classes.highlightsGrid}>
        <div className={classes.highlightsGridWrapper}>
          <h1>Public School Programs</h1>
          <p>After school programs in Brooklyn public schools for grades K-8.</p>
        </div>
        <div className={classes.highlightsGridWrapper}>
          <h1>Community Programs</h1>
          <p>Local community youth tennis programs throughout the summer in public parks.</p>
        </div>
        <div className={classes.highlightsGridWrapper}>
          <h1>Kids with disabilities</h1>
          <p>Accessible Tennis for people of all backgrounds and abilities throughout Brooklyn.</p>
        </div>
      </div>
    </div>
  )
}

export default Highlights