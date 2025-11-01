import React from 'react'
import ContactForm from './ContactForm'
import Image from 'next/image'

function Contact() {
    return (
        <div className='flex  justify-between w-[80%] mx-auto'>
            <div className='w-[50%]'>
                <ContactForm />
            </div>
            <div className='w-[50%]  flex items-center justify-end'>
                <Image
                className='rounded-lg shadow-lg'
                    width={700}
                    height={200}
                    src={'/about-6.jpg'}
                    alt=''
                />
            </div>
        </div>
    )
}

export default Contact
