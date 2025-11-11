import React from 'react'

function ClienHeading({title, desc}:{title:string, desc:string}) {
    return (
        <div className='text-center space-y-3 lg:w-[40%] mx-auto'>
            <h1 className='text-5xl font-semibold about-hero__title '>{title}</h1>
            <p className='text-gray-600'>{desc}</p>
        </div>
    )
}

export default ClienHeading
