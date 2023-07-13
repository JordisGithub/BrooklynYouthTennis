import React from 'react'
import BYTAHero from './hero/BYTAHero'
import Highlights from './Highlights/Highlights'
import Programs from './Programs/Programs'
import Subscribe from './Subscribe/Subscribe'

function Home() {
  return (
    <>
      <BYTAHero/>
      <Highlights />
      <Programs />
      <Subscribe />
      </>
  );
}

export default Home;