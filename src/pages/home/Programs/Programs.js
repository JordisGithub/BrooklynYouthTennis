import React from 'react'
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  programs: {
    backgroundColor: '#354463',
    margin: 'auto',
    paddingBottom: '50px',
    height: '100%',
  },
  programs_title: {
    fontFamily: 'komet, sans-serif',
    fontSize: '12px',
    fontWeight: 400,
    color: '#354463',
    backgroundColor: 'white',
    textTransform: 'uppercase',
    padding: '10px 25px',
    textAlign: 'center',
    letterSpacing: '2px',
    margin: 'auto',
    width: 'fit-content',
    marginBottom: '40px',
  },
  programs_description: {
    color: '#ffffff',
    fontFamily: 'PoynterOSDisp, sans-serif',
    fontSize: '20px',
    fontWeight: 400,
    letterSpacing: '1.2px',
    lineHeight: '30px',
    width: '90vw',
    margin: 'auto',
    marginBottom: '60px',
    [theme.breakpoints.down('md')]: {
      padding: '0px 0 30px',
      fontSize: '12px',
      lineHeight: '18px',
      marginBottom: '0px',
      // paddingTop: '0px',
      width: '90vw',
    },
  },
  
  programs_grid: {
    gridGap: '40px',
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    width: '90%',
    margin: 'auto',
    [theme.breakpoints.down('lg')]: {
      gridTemplateColumns: '1fr',
    },
  },
  programs_grid_card: {
    backgroundColor: 'white',
    display: 'grid',
    gridTemplateRows: 'auto',
    '& h1': {
      fontFamily: 'PoynterOSDisp, sans-serif',
      fontSize: '20px',
      fontWeight: 400,
      width: '94%',
      margin: '20px auto 0',
      color: '#354463',
    },
    '& p': {
      fontWeight: 300,
      fontFamily: 'komet, sans-serif',
      fontSize: '16px',
      width: '90%',
      margin: 'auto',
      padding: '20px',
      lineHeight: '25px',
      color: '#354463',
      marginTop: '10px',
    },
  },
  afterschool_img: {
    overflow: 'hidden',
    height: '300px',
    backgroundImage: `url("https://i.imgur.com/02iokib.jpg")`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '25% 30%',
    backgroundSize: '130%',
    },
  
  community_img: {
    overflow: 'hidden',
    height: '300px',
    backgroundImage: `url("https://i.imgur.com/Ek4wD9J.jpg")`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    },
  
  adaptive_img: {
    overflow: 'hidden',
    height: '300px',
    backgroundImage: `url("https://i.imgur.com/qltRxlk.jpg")`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
  },
}))


const Programs = () => {
  const classes = useStyles();
  return (
    <div  className={classes.programs}>
      <div className={classes.programs_title}>
        Tennis Programs
      </div>
      <div className={classes.programs_description}>
        Mission: To partner with school age children from the ages of 5-17 to develop mentally strong, healthy and physically active kids, by providing quality tennis instruction at low or no cost 
      </div>
        <div className={classes.programs_description}>
      Brooklyn Youth Tennis Association helps young people develop into socially responsible, engaged citizens by providing year-round tennis instruction. At low or no cost, we aim to facilitate the development of social and emotional skill-building minds into physically active contributing members of society. BYTA partners with public schools where we assist with general and special education students.
      </div> 
      <div className={classes.programs_grid}>
        <div className={classes.programs_grid_card}>
          <div className={classes.afterschool_img}/>
          <h1>BYTA AfterSchool Programs</h1>
          <p>The Brooklyn Youth Tennis Association (BYTA) offers an after-school tennis program for children attending Public School 11 and Public School 20 in Brooklyn. Our program provides free tennis instruction to young players of all skill levels, using a variety of drills and activities to develop tennis skills, physical fitness, and social connections. We aim to create a safe and supportive environment where every child can thrive and develop a lifelong love of tennis.</p>
        </div>
        <div className={classes.programs_grid_card}>
          <div className={classes.community_img}/>
       
          <h1>Community Youth Lessons</h1>
          <p>The Brooklyn Youth Tennis Association (BYTA) provides free tennis instruction and programming to children in the Fort Green neighborhood of Brooklyn. Our experienced coaches work with young players of all skill levels, using a variety of drills and activities to develop tennis skills, physical fitness, and social connections. We strive to create a fun and engaging environment where every child can thrive and develop a lifelong love of tennis.</p>
        </div>
        <div className={classes.programs_grid_card}>
          <div className={classes.adaptive_img}/>
      
          <h1>Adaptive Tennis</h1>
          <p>The adaptive tennis program offered by the Brooklyn Youth Tennis Association (BYTA) provides specialized instruction, equipment, and techniques for kids with disabilities, including those with autism and mobility disabilities. The program is designed to create a safe and supportive environment where all children can participate fully and enjoyably in the sport of tennis, while also fostering social connections and personal growth.</p>
        </div>
      </div>
    </div>
  )
}

export default Programs