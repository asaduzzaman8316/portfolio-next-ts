
import React from 'react'
import Hero from './components/Hero/Hero'
import AboutMe from './components/share/AboutMe'

const page = () => {
  return (
    <>
      <Hero />
      <div className='flex justify-center mt-10 gap-10'>
        <AboutMe/>
      </div>
    </>
  )
}

export default page
