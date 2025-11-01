import Image from 'next/image'
import React from 'react'
import MiniBox from './MiniBox'

function StatusBott() {
    return (
        <div>
            <div className='h-70 mt-10 relative w-[80%] mx-auto overflow-hidden'>
                <Image
                    className='absolute top-0 bottom-0 z-10'
                    width={3500}
                    height={10}
                    src={'/about-9.png'}
                    alt='bg-nanar'
                />
                <Image
                    className='absolute top-0 bottom-0 backdrop-blur-xs z-30'
                    width={3500}
                    height={10}
                    src={'/banner-10.png'}
                    alt='bg-nanar'
                />
                <div className='flex items-center px-20 h-70 justify-between'>
                    <MiniBox title='4+' para='Glorious years' />
                    <MiniBox title='14+' para='Happy clients' />
                    <MiniBox title='24+' para='Project complete' />
                    <MiniBox title='9+' para='Team advisor' />
                    <MiniBox title='10+' para='Products sale' />
                </div>
            </div>
        </div>
    )
}

export default StatusBott
