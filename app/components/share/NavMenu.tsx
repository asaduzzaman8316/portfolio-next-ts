import Link from 'next/link';
import React from 'react'
import Social from './Social';
import Button from './Button';
interface navmemu {
    name: string;
    navlink: string
}
const NavMenu = () => {
    const menu: navmemu[] = [
        {
            name: "Home",
            navlink: '/'
        },
        {
            name: "Service",
            navlink: '/service'
        },
        {
            name: "About",
            navlink: "/about"
        },
        {
            name: "Pages",
            navlink: "/pages"
        },
        {
            name: "Blogs",
            navlink: "/blogs"
        },
        {
            name: "Contact",
            navlink: "/contact"
        },

    ]
    return (

        <div className=' 2xl:container gap-5 mx-auto text-white 2xl:px-0 px-14 flex items-center py-5 justify-between '>
            <div className='flex items-center gap-8'>
                <div><Link href='/' className='text-2xl font-semibold'>Nan<span className='text-red-500'>cy</span></Link></div>
                <div className='flex  text-lg font-medium'>
                    {
                        menu.map((item, idx) => (
                            <div key={idx} className='hover:-translate-y-1 duration-500 ease-in-out'>
                                <Link
                                    className=' px-4 py-1.5  rounded-md hover:text-red-500 duration-500 ease-in-out'
                                    href={item.navlink}>
                                    {item.name}
                                </Link>
                            </div>
                        ))
                    }
                </div>
            </div>

            <div className='flex items-center gap-8'>
                <Social />
                <Button />
            </div>
        </div>

    )
}

export default NavMenu
