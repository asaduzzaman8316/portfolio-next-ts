import Image from 'next/image'
import React from 'react'
import Carousel from './Carousel'
import Heading from '@/app/components/share/Heading'

function AboutHero() {
    return (
        <div className='w-[80%] mx-auto gap-8  items-center flex justify-between pt-28 2xl:pt-40'>
            <div>
                <Image
                    className='rounded-md'
                    width={2700}
                    height={500}
                    src={'/about-1.png'}
                    alt='about Hero Image'
                />
            </div>
            <div>
                <div className='space-y-6'>
                    <Heading size='text-5xl' title='Welcome to Nest' />
                    <p className='text-gray-700 leading-6 tracking-tight text-justify text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate id est laborum.</p>
                    <p className='text-gray-700 leading-6 tracking-tight text-justify text-sm'>Ius ferri velit sanctus cu, sed at soleat accusata. Dictas prompta et Ut placerat legendos interpre.Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante Etiam sit amet orci eget. Quis commodo odio aenean sed adipiscing. Turpis massa tincidunt dui ut ornare lectus. Auctor elit sed vulputate mi sit amet. Commodo consequat. Duis aute irure dolor in reprehenderit in voluptate id est laborum.</p>
                </div>
                <div className='pt-10'>
                    <Carousel />
                </div>
            </div>
        </div>
    )
}

export default AboutHero
