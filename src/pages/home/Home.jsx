import React from 'react'
import { Hero, Highlights, Programs, Sponsorships, FeaturedImages, Subscribe } from '../../components'

function Home() {
  return (
    <>
      <Hero headerName={`BROOKLYN youth tennis association`} imgUrl={`https://i.imgur.com/Xl7YNyd.jpg`}/>
      <Highlights />
      <Programs />
      <Sponsorships />
      <FeaturedImages />
      <Subscribe />
      </>
  );
}

export default Home;