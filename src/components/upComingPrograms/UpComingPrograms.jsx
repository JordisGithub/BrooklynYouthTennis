import React from 'react'
import { makeStyles } from '@mui/styles'
import UpComingProgramsCard from './UpComingProgramsCard';
import { upComingProgramsData } from '../../data';

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    position: 'relative',
    // General Layout
    fontFamily: theme.typography.fontFamily,
    backgroundColor: theme.palette.main,
    color: theme.palette.white,
    width: '100%',
    marginTop: '-50px',
    padding: '50px 0',

    //FlexBox
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '20px',
  },
  header: {
    paddingBottom: '20px',
    fontSize: '2rem',
  },
  programsContainer: {
    // General Layout
    width: '80%',
    maxWidth: '1000px',

    //Flexbox
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
    gap: '20px',
  },
  wave: {
    position: 'absolute',
    top: 0,
    left: 0,
    transform: 'translateY(-1px)'
  }
}));

export default function UpComingPrograms() {
  const classes = useStyles();
  return (
    <div className={classes.mainContainer}>
      <svg viewBox="0 0 1440 152" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes.wave}>
        <path d="M0 -9.65595e-06H1440V152C907.505 -54.8111 592.804 -49.462 0 152V-9.65595e-06Z" fill="#fff" />
      </svg>
      <h2 className={classes.header}>Upcoming Programs/Events</h2>
      <div className={classes.programsContainer}>
        {upComingProgramsData.map((program) => {
          return <UpComingProgramsCard title={program.title} sessions={program.sessions} backgroundImageUrl={program.backgroundImageUrl} />
        })}
      </div>
    </div>
  )
}
