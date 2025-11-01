
import React from 'react'
import Hero from './components/Hero/Hero'
import AboutMe from './components/share/AboutMe'
import My_Clien from './components/Client/My_Clien'
import Project from './components/Project/Project'

const page = () => {
  return (
    <>
      <Hero />
      <div className='mt-10 '>
        <AboutMe/>
        <My_Clien/>
        <Project/>
      </div>
    </>
  )
}

export default page
