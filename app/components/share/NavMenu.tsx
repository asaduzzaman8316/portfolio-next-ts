import Link from 'next/link';
import Social from './Social';
import Button from './Button';
import HeaderBtn from './HeaderBtn';
import Image from 'next/image';
import { FaBarsStaggered } from 'react-icons/fa6';
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
            name: "Blogs",
            navlink: "/blogs"
        },
        {
            name: "Contact",
            navlink: "/contact"
        },

    ]
    return (

        <div className=' container gap-5 mx-auto text-gray-800  2xl:px-0 px-4  '>
            <div className='hidden'>
                <div className='flex justify-between items-center py-4'>
                    <div className='flex items-center gap-8 relative'>
                        <div>
                            <HeaderBtn />
                        </div>
                        <div className='flex  text-lg font-medium '>
                            {
                                menu.map((item, idx) => (
                                    <div key={idx} className='hover:-translate-y-1 animate- duration-500 ease-in-out'>
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
                        <Button title='Download Cv' />
                    </div>
                </div>
            </div>
            <div className='flex justify-between items-center py-1'>
                <Link href={'/'}>
                    <Image
                    className='w-40' 
                    width={1000}
                    height={1000}
                    src={'/mlogo.png'}
                    alt='mobile device logo, asaduzzaman8316'
                    />
                </Link>
                <div>
                    <button><FaBarsStaggered /></button>
                </div>
            </div>
        </div>

    )
}

export default NavMenu
