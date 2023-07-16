import React from 'react'
import BYTAHero from './hero/BYTAHero'
import Highlights from './highlights/Highlights'
import Programs from './programs/Programs'
import Subscribe from './subscribe/Subscribe'
import Sponsorships from './sponsorships/Sponsorships'
import FeaturedImages from './featuredImages/FeaturedImages'

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