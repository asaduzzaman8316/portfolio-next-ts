import React from 'react'
import AboutHero from './components/AboutHero'
import Sixbox from './components/Sixbox'
import Performance from './components/Performance Sec/Performance'
import Status from './components/Status/Status'
import Team from './components/OurTeam/Team'

const page = () => {
  return (
    <div>
      <AboutHero />
      <Sixbox />
      <Performance />
      <Status />
      <Team/>
    </div>
  )
}

export default page
