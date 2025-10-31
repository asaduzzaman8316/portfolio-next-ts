import Image from 'next/image'
import React from 'react'
import Carousel from './Carousel'

function AboutHero() {
    return (
        <div className='w-[70%] mx-auto gap-8  items-center flex justify-between mt-16'>
            <div>
                <Image
                className='rounded-md'
                    width={2500}
                    height={500}
                    src={'/about-1.png'}
                    alt='about Hero Image'
                />
            </div>
            <div>
                <div className='space-y-6'>
                    <h1 className='about-hero__title text-5xl font-semibold'>Welcome to Nest</h1>
                    <p className='text-gray-700 leading-6 tracking-tight text-justify'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate id est laborum.</p>
                    <p className='text-gray-700 leading-6 tracking-tight text-justify'>Ius ferri velit sanctus cu, sed at soleat accusata. Dictas prompta et Ut placerat legendos interpre.Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante Etiam sit amet orci eget. Quis commodo odio aenean sed adipiscing. Turpis massa tincidunt dui ut ornare lectus. Auctor elit sed vulputate mi sit amet. Commodo consequat. Duis aute irure dolor in reprehenderit in voluptate id est laborum.</p>
                </div>
                <div className='pt-10'>
                    <Carousel />
                </div>
            </div>
        </div>
    )
}

export default AboutHero
