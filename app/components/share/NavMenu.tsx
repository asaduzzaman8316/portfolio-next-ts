import Link from 'next/link';
import Social from './Social';
import Button from './Button';
import HeaderBtn from './HeaderBtn';
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
            name: "Project",
            navlink: '#project'
        },
        {
            name: "About",
            navlink: "#about"
        },
        {
            name: "Blogs",
            navlink: "#blogs"
        },
        {
            name: "Contact",
            navlink: "#contact"
        },

    ]
    return (

        <div className=' container gap-5 mx-auto text-gray-800  2xl:px-0 px-4  '>
            <div className=''>
                <div className='flex justify-between items-center py-4'>
                    <div className='flex items-center gap-8 relative'>
                        <div>
                            <HeaderBtn />
                        </div>
                        <div className='hidden md:block'>
                            <div className='flex  text-lg font-medium'>
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
                    </div>

                    <div className='flex items-center gap-8'>
                        <div className='hidden md:block'>
                            <Social />
                        </div>
                        <div className=''>
                            <a href="/resume.pdf" download className='inline-block text-center hover:bg-red-600 px-4 py-1.5 rounded-md border-gray-200 border-2 shadow-sm duration-500 hover:-translate-y-1 hover:text-white bg-red-500 text-white'>Download Cv</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default NavMenu
