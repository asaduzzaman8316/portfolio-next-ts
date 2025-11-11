"use client"
import Image from 'next/image'
import Link from 'next/link'


function HeaderBtn() {
    return (
        <Link href={'/'}>
            <Image
                className='hover:scale-110 cursor-pointer duration-500'
                width={80}
                height={80}
                src={'/headerlogo.png'}
                alt='Header Logo, Main Logo, Asaduzzaman8316'
            />
        </Link>
    )
}

export default HeaderBtn
