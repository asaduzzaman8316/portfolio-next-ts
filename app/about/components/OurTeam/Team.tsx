import AboutTitle from '@/app/components/share/AboutTitle'
import React from 'react'
import TeamLeft from './TeamLeft'
import TeamRight from './TeamRight'

function Team() {
    return (
        <div className='w-[70%] mx-auto '>
            <AboutTitle title='Our Team' />
            <div className='grid grid-cols-3 gap-10 pt-10 '>
                <TeamLeft />
                <TeamRight src='/about-6.png' title='H. Merinda' bio='CEO & Co-Founder' />
                <TeamRight src='/about-8.png' title='Dilan Specter' bio='Head Engineer' />
            </div>
        </div>
    )
}

export default Team
