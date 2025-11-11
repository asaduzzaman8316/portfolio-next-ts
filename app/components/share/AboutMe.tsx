"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import AboutKey from '../AboutmeLIst/AboutKey'
import { AboutProps } from '../types/types'

const AboutMe = () => {
    const mainSkill: AboutProps[] = [
        {
            name: "React / Next.js Development",
            desc: "Building fast, SEO-optimized, and responsive web apps."
        },
        {
            name: "TypeScript / JavaScript",
            desc: "Writing clean, scalable, and maintainable front-end code."
        },
        {
            name: "Tailwind CSS / Framer Motion",
            desc: 'Creating modern UI with smooth animation and styling.'
        },
        {
            name: "Web Performance Optimization",
            desc: 'Boosting speed, UX, and Core Web Vitals.'
        },
        {
            name: 'API Integration (REST / JSON)',
            desc: 'Connecting front-end with real-time backend data.'
        }
    ]

    const Certification: AboutProps[] = [
        {
            name: "Spoken English – HEXA’S, Zindabazar, Sylhet",
            desc: 'Improved communication and professional English fluency.'
        }
    ]

    const experience: AboutProps[] = [
        {
            name: "Asad Mart – E-Commerce Website",
            desc: "Built with Next.js & TypeScript, featuring product filtering, Redux, and Firebase."
        },
        {
            name: "Tic-Tac-Toe – Classic Game Web App",
            desc: 'Built with JavaScript, featuring interactive gameplay, score tracking, and responsive design.'
        },
        {
            name: "Weather App – Real‑Time Forecast Web App",
            desc: 'Built with JavaScript, featuring live weather updates, sunrise/sunset data, and responsive design.'
        }
    ]

    const education: AboutProps[] = [
        { name: "Diploma in Computer Science & Technology – Sylhet Polytechnic Institute", desc: 'Focused on web development, programming, and software fundamentals.' },
        {
            name: "SSC in Science – Bangladesh Education Board",
            desc: 'Strong foundation in mathematics, logic, and analytical thinking.'
        }
    ]
    const btns = ["Main skills", 'Certification', "Projects", "Education"]

    const [values, setValues] = useState(mainSkill);
    const [btnnum, setBtnnum] = useState(1);


    const handleOnClick = ((idx: number) => {
        if (idx === 0) {
            setValues(mainSkill)
            setBtnnum(1)
        }
        else if (idx === 1) {
            setValues(Certification)
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
        <div className='flex flex-col lg:flex-row lg:gap-24 px-4 mx-auto lg:h-[700px] container 2xl:px-0'>
            <div className='2xl:w-3/12 lg:w-4/12 w-6/12  -translate-y-28 lg:translate-x-0 translate-x-30'>
                <Image
                    className='rounded-md shadow-2xl'
                    width={2000}
                    height={1000}
                    src={'/image3.jpg'}
                    alt='about image'
                />
            </div>
            <div className='lg:w-8/12'>
                <div className=' space-y-4 pb-8'>
                    <h1 className='text-7xl font-bold lg:text-start text-center'
                    >About Me</h1>
                    <p className='text-gray-600 text-lg text-justify
                    '>I’m a Front-End Developer specializing in React, Next.js, TypeScript, and JavaScript. I create fast, responsive, and modern web applications focused on performance and great user experience. My passion is turning creative ideas into clean, efficient, and scalable code using the latest front-end technologies.</p>
                </div>
                <div className='space-x-10 lg:text-start text-center lg:text-xl 2xl:text-2xl'>
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
