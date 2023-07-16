import React from 'react'
import BYTAHero from './hero/BYTAHero'
import Highlights from './Highlights/Highlights'
import Programs from './Programs/Programs'
import Sponsorships from './Sponsorships/Sponsorships'
import FeaturedImages from './featuredImages/FeaturedImages'
import Subscribe from './Subscribe/Subscribe'

function Home() {
  return (
    <>
      <BYTAHero/>
      <Highlights />
      <Programs />
      <Sponsorships />
      <FeaturedImages />
      <Subscribe />
      </>
  );
}

export default Home;