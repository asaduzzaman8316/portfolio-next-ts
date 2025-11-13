import React from 'react'
import ContactForm from './ContactForm'
import Image from 'next/image'

function Contact() {
    return (
        <div id='contact' className='flex flex-col lg:flex-row  justify-center px-4 lg:px-0 items-center container mx-auto'>
            <div className='lg:w-[40%]'>
                <ContactForm />
            </div>
            <div className='lg:w-[30%]  flex items-center justify-end'>
                <Image
                    className='rounded-lg shadow-lg'
                    width={400}
                    height={400}
                    src={'/image4.jpg'}
                    alt='about image, asaduzzaman asaduzzaman8316'
                />
            </div>
        </div>
    )
}

export default Contact
