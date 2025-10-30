import React from 'react'
import { AboutProps } from '../types/types'

function AboutKey(props: AboutProps) {
    return (
        <div className='flex flex-col text-lg'>
            <p className='text-gray-600'>{props.name}</p>
            <p className='text-gray-400'>{props.desc}</p>
        </div>
    )
}

export default AboutKey
