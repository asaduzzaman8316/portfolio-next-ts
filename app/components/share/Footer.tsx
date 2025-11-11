"use client";

import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import Social from './Social'
import { FaArrowUp } from 'react-icons/fa6'

function Footer() {
    const [show, setShow] = useState(false);


    useEffect(() => {
        const handleScroll = () => {
            setShow(window.scrollY > 300);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className='bg-gray-100 mt-16 relative'>
            <footer className="container mx-auto">
                <aside className='flex items-center justify-between gap-4 sm:gap-6 md:gap-10 py-6 px-4 sm:px-6 md:px-0 flex-wrap md:flex-nowrap '>
                    <Image
                        width={200}
                        height={50}
                        src={'/mlogo.png'}
                        alt='logo'
                        className="w-32 sm:w-40 h-auto"
                    />
                    <div className='flex-1'>
                        <Social />
                    </div>
                    <p className='text-xs sm:text-sm md:text-base w-full md:w-auto text-center md:text-right'>Copyright © 2025 Asaduzzaman. All Rights Reserved.</p>
                </aside>
            </footer>

            {show && (
                <button
                    onClick={scrollToTop}
                    aria-label="Go to top"
                    className='fixed bottom-6 right-6  hover:bg-red-600 hover:text-white p-3 rounded-full shadow-lg transition-all duration-500 z-40 flex items-center justify-center'
                >
                    <FaArrowUp size={20} />
                </button>
            )}
        </div>
    )
}

export default Footer
