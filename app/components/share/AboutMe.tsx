"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import AboutKey from '../AboutmeLIst/AboutKey'
import { AboutProps } from '../types/types'

const AboutMe = () => {
    const mainSkill: AboutProps[] = [
        { name: "User experience design - UI/UX", desc: "Delight the user and make it work" },
        { name: "Web and user interface design - Development", desc: "Websites, web experiences, ..." },
        { name: "Interaction design - Animation", desc: 'I like to move it move it.' }
    ]

    const awards: AboutProps[] = [
        { name: "Awwwards.com - Winner", desc: '2019 - 2020' },
        { name: "CSS Design Awards - Winner", desc: '2017 - 2018' },
        { name: "Design nominees - site of the day", desc: '2013 - 2014' }
    ]

    const experience: AboutProps[] = [
        { name: "Sr. Front-end Engineer - Google", desc: "2018 - Current" },
        { name: "Front-end Engineer - Microsoft", desc: '2017 - 2018' },
        { name: "Software Engineer - Alibaba", desc: '2013 - 2014' }
    ]

    const education: AboutProps[] = [
        { name: "BSc In CSE - ABC University, Los Angeles, CA", desc: 2010 },
        { name: "Diploma in Computer Science - Gamma Technical Institute", desc: 2009 },
        { name: "Graphic Designer - ABC Institute, Los Angeles, CA", desc: 2007 }
    ]
    const btns = ["Main skills", 'Awards', "Experience", "Education & Certification"]

    const [values, setValues] = useState(mainSkill);
    const [btnnum, setBtnnum] = useState(1);


    const handleOnClick = ((idx: number) => {
        if (idx === 0) {
            setValues(mainSkill)
            setBtnnum(1)
        }
        else if (idx === 1) {
            setValues(awards)
            setBtnnum(2);
        }
        else if (idx === 2) {
            setValues(experience)
            setBtnnum(3);
        }
        else {
            setValues(education)
            setBtnnum(4);
        }
    })

    return (
        <div className='h-screen flex gap-8 px-14 mx-auto'>
            <div className='w-4/12  -translate-y-28 shadow-2xl bg-transparent'>
                <Image
                    className='h-160 rounded-md'
                    width={400}
                    height={0}
                    src={'/about-5.jpg'}
                    alt='about image'
                />
            </div>
            <div className='w-8/12'>
                <div className=' space-y-4 pb-8'>
                    <h1 className='text-7xl font-bold text-start'
                    >About Me</h1>
                    <p className='text-gray-600 text-lg text-justify
                    '>There are many variations of passages of Lorem Ipsum available, but the majority have suffered <a href="#">alteration</a> in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum,</p>
                </div>
                <div className='space-x-10 text-start text-2xl'>
                    {
                        btns.map((btn, idx) => (
                            <button
                                key={idx}
                                className={`cursor-pointer active:scale-90 after:content-[""] after:absolute relative after:bg-red-500 ${btnnum === idx + 1 ? 'after:w-full text-red-500' : 'after:w-8 '} after:h-0.5 after:-bottom-1  after:left-0  duration-500 transition-all after:duration-500`}
                                onClick={() => handleOnClick(idx)}
                            >{btn}</button>
                        ))
                    }
                </div>
                <div className=' mt-10 space-y-4'>
                    {
                        values.map((item: AboutProps, idx: number) => (
                            <AboutKey key={idx} {...item} />
                        ))
                    }
                </div>
            </div>
        </div >
    )
}

export default AboutMe
