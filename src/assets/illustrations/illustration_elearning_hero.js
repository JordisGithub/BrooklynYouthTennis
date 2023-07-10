import { memo } from 'react';
import { m } from 'framer-motion';
import { keyframes } from '@emotion/react'
import Ball from '../../images/ballTransparent.png'
import Racket from '../../images/racket.png'

// @mui
import { styled, alpha, useTheme } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';
// components
import { Image } from '../../components';
// pattern
import { Icon, Label, Shape, Pattern01, Pattern02 } from '../pattern';

// ----------------------------------------------------------------------
const wave = keyframes`
from 0% to {
  transform: translate(35px, 25px) rotate(15deg)
}

50% {
  transform: translate(45px, -25px) 
}`

  const varUp = keyframes`
  from 0% to {
    transform: translate(35px, -25px) rotate(15deg)
  }

  50% {
    transform: translate(45px, 25px) 
  }`

const varUp2 = keyframes`
0% {
  transform: rotate(0);
}
100% {
  transform: rotate(360deg);
}`

const RootStyle = styled(Box)(() => ({
  width: 670,
  height: 670,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
}));

// ----------------------------------------------------------------------

function ElearningHeroIllustration(props) {

  return (
    <RootStyle >
      <Box sx={{ position: 'absolute', right: 18, bottom: 28, zIndex: 8 }}>
        <Image
          placeholderSrc=""
          alt="teacher"
          src="https://i.imgur.com/u91xt8o.jpg"
          sx={{  height: 490 }}
        />
      </Box>

      <Box
        {...props}
        sx={{
          animation: `${wave} 0.5s linear infinite alternate`,
          animationDuration: '3s',
          position: 'absolute',
          top: '80px',
          left: 115,
        }}
      >
          <Image
          alt="book icon"
          src={Ball}
          sx={{
            width: 92,
            height: 92,
          }}
        />
      </Box>

      <Box
        {...props}
        sx={{
          animation: `${varUp2} 5s linear infinite alternate`,
          animationDuration: '5s',
          position: 'absolute',
          top: '140px',
          right: 95,
          zIndex: 8
        }}
      >
          <Image
          alt="book icon"
          src={Ball}
          sx={{
            width: 92,
            height: 92,
          }}
        />
      </Box>

      <Box
        {...props}
        sx={{
          animation: `${varUp} 15s linear infinite alternate`,
          animationDuration: '5s',
          position: 'absolute',
          top: '190px',
          right: 295,
          zIndex: 8
        }}
      >
          <Image
          alt="book icon"
          src={Ball}
          sx={{
            width: 62,
            height: 62,
          }}
        />
      </Box>
      <Pattern01 sx={{ left: 0, top: 0 }} />
    </RootStyle>
  );
}

export default memo(ElearningHeroIllustration);
