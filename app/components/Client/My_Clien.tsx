import React from 'react'
import ClienHeading from './ClienHeading'
import ClientCard from './ClientCard'

function My_Clien() {
    return (
        <div className='w-[70%] mx-auto'>
            <ClienHeading title='My Best Client' desc='There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.' />
            <ClientCard />
        </div>
    )
}

export default My_Clien
