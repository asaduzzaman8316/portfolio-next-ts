import React from 'react'
import ClienHeading from '../Client/ClienHeading'
import ProjectCard from './ProjectCard'

export default function Project() {
    return (
        <div className='py-16 w-[80%] mx-auto'>
            <ClienHeading title='My Latest Project' desc='There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.' />

            <ProjectCard />
        </div>
    )
}
