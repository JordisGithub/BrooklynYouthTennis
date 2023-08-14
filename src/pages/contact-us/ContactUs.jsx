import React from 'react'

import { Hero, Highlights, Programs, Sponsorships, FeaturedImages, Subscribe, GetInvolvedOptions, UpComingPrograms, FAQ, ContactUsContainer } from '../../components'

const ContactUs = () => {
  return (
    <>
      <Hero headerName={`Contact Us`} imgUrl={`https://i.imgur.com/WGs7L5n.jpg`} headerCaption={`185 Hall St, Brooklyn, NY 11205`} openHoursCaption={`Mon - Sun (8am - 10pm)`} emailCaption={`brooklynyouthtennis@gmail.com`} />
      <ContactUsContainer />
    </>
  );
}

export default ContactUs;