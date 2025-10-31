import Image from 'next/image'
import React from 'react'

function AboutTitle(props:{title:string}) {
  return (
    <div className='gap-1 flex flex-col  items-center mt-16 text-4xl font-semibold about-hero__title'>
      <h1>{props.title}</h1>
      <Image
      width={150}
      height={10}
      src={'/wave.png'}
      alt='title style'
      />
    </div>
  )
}

export default AboutTitle
