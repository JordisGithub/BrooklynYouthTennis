import React from 'react'
import BYTAHero from './BYTAHero'
import Highlights from './Highlights/Highlights'
import Programs from './Programs/Programs'
import Skills from './Skills/Skills'
import Subscribe from './Subscribe/Subscribe'

function Home() {
  return (
    <>
      <BYTAHero/>
      <Highlights />
      <Programs />
      <Skills />
      <Subscribe />
      </>
  );
}

export default Home;