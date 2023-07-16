import * as React from 'react';
import ImageListItem from '@mui/material/ImageListItem';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#354463',
    paddingBottom: '40px',
  },
  title: {
    fontFamily: 'komet, sans-serif',
    fontSize: '12px',
    fontWeight: 200,
    backgroundColor: '#C1F7D5',
    color: '#354463',
    textTransform: 'uppercase',
    padding: '10px 25px',
    letterSpacing: '2px',
    width: 'max-content',
    margin: 'auto',
  },
  imgContainer: {
    width: '80%',
    margin: ' 40px auto',
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gridGap: '4px',
      [theme.breakpoints.up('md')]: {
        gridTemplateColumns: 'repeat(3, 1fr)',
      },
  },
}))

const FeaturedImages = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.title}>Featured Images</div>
      <div className={classes.imgContainer}>
      {itemData.map((item) => (
        <ImageListItem key={item.img} className={classes.images}>
          <img
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </div>
    </div>
  );
}

const itemData = [
  {
    img: 'https://i.imgur.com/GFnxRj1.png',
    title: '',
  },
  {
    img: 'https://i.imgur.com/QVRCtpx.jpg',
    title: '',
  },
  {
    img: 'https://i.imgur.com/ZiNdMML.jpg',
    title: '',
  },
  {
    img: 'https://i.imgur.com/eDGRbBE.jpg',
    title: '',
  },
  {
    img: 'https://i.imgur.com/ZftzkeA.jpg',
    title: '',
  },
  {
    img: 'https://i.imgur.com/GY9kw5u.jpg',
    title: '',
  },
  {
    img: 'https://i.imgur.com/GIVRzM6.jpg',
    title: '',
  },
  {
    img: 'https://i.imgur.com/316I59n.jpg',
    title: '',
  },
  {
    img: 'https://i.imgur.com/dvHlj2H.jpg',
    title: '',
  },
  {
    img: 'https://i.imgur.com/6R0WDWH.jpg',
    title: '',
  },
  {
    img: 'https://i.imgur.com/tgmQR9b.jpg',
    title: '',
  },
  {
    img: 'https://i.imgur.com/rjDIBsB.jpg',
    title: '',
  },
];

export default FeaturedImages;