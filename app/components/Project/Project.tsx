import React from 'react'
import ClienHeading from '../Client/ClienHeading'
import ProjectCard from './ProjectCard'

export default function Project() {
    return (
        <div className='py-16 container mx-auto'>
            <ClienHeading title='My Latest Project' desc='The culmination of my latest skills and best thinking. See the results of my most recent, high-impact client collaboration.' />

            <ProjectCard />
        </div>
    )
}
