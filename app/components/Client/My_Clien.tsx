import React from 'react'
import ClienHeading from './ClienHeading'
import ClientCard from './ClientCard'

function My_Clien() {
    return (
        <div className='lg:w-[70%] px-4 lg:px-0 pt-10 mx-auto'>
            <ClienHeading title='My Best Client' desc='I am proud to partner with exceptional clients who trust me to transform their vision into market-defining design excellence.' />
            <ClientCard />
        </div>
    )
}

export default My_Clien
