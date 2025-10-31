import Image from 'next/image'
import React from 'react'

function Carousel() {
    return (
        <div className='flex overflow-auto gap-3'>
            <Image
                className='rounded-md'
                width={200}
                height={200}
                src={'/about-2.png'}
                alt='carosuel-01'
            />
            <Image
                className='rounded-md'
                width={200}
                height={200}
                src={'/about-3.png'}
                alt='carosuel-01'
            />
            <Image
                className='rounded-md'
                width={200}
                height={200}
                src={'/about-4.png'}
                alt='carosuel-01'
            />
            <Image
                className='rounded-md'
                width={200}
                height={200}
                src={'/about-3.png'}
                alt='carosuel-01'
            />
            <Image
                className='rounded-md'
                width={200}
                height={200}
                src={'/about-2.png'}
                alt='carosuel-01'
            />


        </div>
    )
}

export default Carousel
