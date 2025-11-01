import Image from 'next/image'
import React from 'react'

function Left() {
    return (
        <div className='w-[50%] mr-8'>

            <Image
                width={800}
                height={190}
                src={'/about-5.png'}
                alt=''
            />

        </div>
    )
}

export default Left
