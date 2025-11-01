import React from 'react'
import AboutHero from './components/AboutHero'
import Sixbox from './components/Sixbox'
import Performance from './components/Performance Sec/Performance'
import Status from './components/Status/Status'
import Team from './components/OurTeam/Team'
import SubScribe from './components/SubScribe/SubScribe'

const page = () => {
  return (
    <div>
      <AboutHero />
      <Sixbox />
      <Performance />
      <Status />
      <Team/>
      <SubScribe/>
    </div>
  )
}

export default page
