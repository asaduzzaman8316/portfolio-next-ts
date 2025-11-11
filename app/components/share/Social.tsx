import React from 'react'
import { FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa'

const Social = () => {
    return (
        <div className='flex gap-3 '>
            <a
                target='_blank'
                className='size-7 text-gray-800 hover:text-white duration-500 flex justify-center items-center rounded-full  hover:bg-red-500 hover:-translate-y-1 ' href="https://www.facebook.com/asaduzzaman.dev"><FaFacebookF /></a>
            <a
                target='_blank'
                className='size-7 text-gray-800 hover:text-white duration-500 flex justify-center items-center rounded-full  hover:bg-red-500 hover:-translate-y-1' href="https://www.instagram.com/asaduzzaman.dev/"><FaInstagram /></a>
            <a
                target='_blank'
                className='size-7 text-gray-800 hover:text-white duration-500 flex justify-center items-center rounded-full  hover:bg-red-500 hover:-translate-y-1' href="https://www.linkedin.com/in/mdasaduzzamancse/"><FaLinkedinIn /></a>
            <a
                target='_blank'
                className='size-7 text-gray-800 hover:text-white duration-500 flex justify-center items-center rounded-full  hover:bg-red-500 hover:-translate-y-1' href="https://x.com/Asad_uzzaman2"><FaTwitter /></a>
            <a
                target='_blank'
                className='size-7 text-gray-800 hover:text-white duration-500 flex justify-center items-center rounded-full  hover:bg-red-500 hover:-translate-y-1' href="https://github.com/asaduzzaman8316"><FaGithub /></a>
        </div>
    )
}

export default Social
