import Image from 'next/image'
import React from 'react'

function SubScribe() {
    return (
        <div className='w-[80%] mx-auto my-36 relative h-100'>
            <div >
                <Image
                    className='rounded-md h-100'
                    width={3000}
                    height={60}
                    src={'/banner-10.png'}
                    alt='banner image'
                />

                <div className='absolute bottom-0 right-8'>
                    <Image
                        className=' '
                        width={500}
                        height={70}
                        src={'/banner-13.png'}
                        alt='banner image'
                    />
                </div>
                <div className='absolute top-0 left-0 p-24'>
                    <h1 className='text-5xl text-gray-700 font-semibold pb-5'>Stay home & get your daily<br/>
                        needs from our shop</h1>
                    <p className='text-gray-600'>Start You&&apos;r Daily Shopping with <span className='text-green-600'>Nest Mart</span></p>

                    <div  className='pt-8'>
                        <input 
                        className='outline-none px-8 py-5 w-90 bg-white rounded-full focus:ring-2 focus:ring-green-600 text-green-700 '
                        type="email" name='email' placeholder='Your email address' />
                        <button 
                        className='p-5 bg-green-600 text-white rounded-full font-semibold -translate-x-14'>
                            Subscribe
                            </button>
                            
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SubScribe
