import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

export default function StandardImageList() {
  return (
    <ImageList sx={{ width: '80vw', height: 550, margin: '40px auto' }} cols={4} rowHeight={224}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: 'https://i.imgur.com/GY9kw5u.jpg',
  },
  {
    img: 'https://i.imgur.com/QVRCtpx.jpg',
  },
  {
    img: 'https://i.imgur.com/nT0ICTI.jpg',
  },
  {
    img: 'https://i.imgur.com/rjDIBsB.jpg',
  },
  {
    img: 'https://i.imgur.com/UsWCDku.jpg',
  },
  {
    img: 'https://i.imgur.com/lOkVCBY.jpg',
  },
  {
    img: 'https://i.imgur.com/oulgo3H.jpg',
  },
  {
    img: 'https://i.imgur.com/8sRzi2E.jpg',
  },
  {
    img: 'https://i.imgur.com/6R0WDWH.jpg',
  },
  {
    img: 'https://i.imgur.com/lAJ3DSO.jpg',
  },
  {
    img: 'https://i.imgur.com/Q4QpbSs.jpg',
  },
  {
    img: 'https://i.imgur.com/DXhTE8V.jpg',
  },
];