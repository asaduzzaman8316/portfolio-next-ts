import Link from 'next/link'
import React from 'react'
import Hero from './components/Hero/Hero'

const page = () => {
  return (
    <>
      <Hero />
      <div className='flex justify-center mt-10 gap-10'>
        <h1>i am home</h1>
        <Link href='/about'>
          Go to about
        </Link>
      </div>
    </>
  )
}

export default page
