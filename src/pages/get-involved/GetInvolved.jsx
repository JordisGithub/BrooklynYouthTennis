import React from 'react'

import { Hero, Highlights, Programs, Sponsorships, FeaturedImages, Subscribe, GetInvolvedOptions, UpComingPrograms } from '../../components'

const GetInvolved = () => {
  return (
    <>
      <Hero headerName={`Get Involved`} imgUrl={`https://i.imgur.com/pb4AULg.jpeg`} headerCaption={`Make a positive impact on our tennis community`} />
      <GetInvolvedOptions />
      <UpComingPrograms />
    </>
  );
}

export default GetInvolved;