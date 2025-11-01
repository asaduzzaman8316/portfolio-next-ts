import React from 'react'
import NavMenu from './NavMenu'

const Header = () => {
    return (
        <div className='bg-gray-800 border-b fixed w-full top-0 border-b-gray-300 z-50'>
            <NavMenu />
        </div>
    )
}

export default Header
