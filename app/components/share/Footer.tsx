import Image from 'next/image'
import React from 'react'

function Footer() {
    return (
        <div className='bg-gray-100 mt-16'>
            <footer className="w-[80%] mx-auto py-10 flex justify-between">
                <aside className='flex flex-col gap-10'>
                    <Image
                        width="200"
                        height="50"
                        src={'/logo.svg'}
                        alt='logg'
                        className="fill-current" />

                    <p className='text-2xl about-hero__title font-semibold'>
                        Nest Industries Ltd.
                        <br />
                        Providing reliable product since 2020
                    </p>
                </aside>
                <nav className='flex flex-col gap-4 text-lg font-semibold'>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover text-gray-600">Branding</a>
                    <a className="link link-hover text-gray-600">Design</a>
                    <a className="link link-hover text-gray-600">Marketing</a>
                    <a className="link link-hover text-gray-600">Advertisement</a>
                </nav>
                <nav className='flex flex-col gap-4 text-lg font-semibold'>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover text-gray-600">About us</a>
                    <a className="link link-hover text-gray-600">Contact</a>
                    <a className="link link-hover text-gray-600">Jobs</a>
                    <a className="link link-hover text-gray-600">Press kit</a>
                </nav>
                <nav className='flex flex-col gap-4 text-lg font-semibold'>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover text-gray-500">Terms of use</a>
                    <a className="link link-hover text-gray-500">Privacy policy</a>
                    <a className="link link-hover text-gray-500">Cookie policy</a>
                </nav>
            </footer>
        </div>
    )
}

export default Footer
