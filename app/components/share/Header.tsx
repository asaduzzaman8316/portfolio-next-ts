import React from 'react'
import NavMenu from './NavMenu'

const Header = () => {
    return (
        <div className=' bg-gray-100 overflow-hidden shadow-md sticky w-full top-0  z-50'>
            <NavMenu />
        </div>
    )
}

export default Header
