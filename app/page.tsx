
import React from 'react'
import Hero from './components/Hero/Hero'
import AboutMe from './components/share/AboutMe'
import Project from './components/Project/Project'
import Contact from './components/contact/Contact'

const page = () => {
  return (
    <>
      <Hero />
      <div className='mt-10 '>
        <AboutMe />
        <Project />
        <Contact />
      </div>
    </>
  )
}

export default page
