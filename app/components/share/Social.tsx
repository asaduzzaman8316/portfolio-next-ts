import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa'

const Social = () => {
    return (
        <div className='flex gap-3 '>
            <a
                className='size-7 hover:text-white duration-500 flex justify-center items-center rounded-full  hover:bg-red-500 hover:-translate-y-1 ' href=""><FaFacebookF /></a>
            <a
                className='size-7 hover:text-white duration-500 flex justify-center items-center rounded-full  hover:bg-red-500 hover:-translate-y-1' href=""><FaInstagram /></a>
            <a
                className='size-7 hover:text-white duration-500 flex justify-center items-center rounded-full  hover:bg-red-500 hover:-translate-y-1' href=""><FaLinkedinIn /></a>
            <a
                className='size-7 hover:text-white duration-500 flex justify-center items-center rounded-full  hover:bg-red-500 hover:-translate-y-1' href=""><FaTwitter /></a>
        </div>
    )
}

export default Social
