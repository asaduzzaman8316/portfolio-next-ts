import React from 'react'
import NavMenu from './NavMenu'

const Header = () => {
    return (
        <div className='bg-gray-800 border-b sticky -top-0.5 border-b-gray-300 z-50'>
            <NavMenu />
        </div>
    )
}

export default Header
