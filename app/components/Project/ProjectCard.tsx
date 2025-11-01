import Image from 'next/image'
import React from 'react'
import Button from '../share/Button'

function ProjectCard() {
    const card = [
        {
            title: "PortFolio",
            src: "/pro-01.png",
            link: 'https://asaduzzaman8316.github.io/Portfolio/'
        },
        {
            title: "Tic-Tac-Toc Game",
            src: "/pro-02.png",
            link: 'https://asaduzzaman8316.github.io/Tic-Tac-Toc/'
        },
        {
            title: "Task Manager",
            src: "/pro-103.png",
            link: 'https://task-manager-asad.vercel.app/'
        },
        {
            title: "Weather",
            src: "/pro-04.png",
            link: 'https://asaduzzaman8316.github.io/Weather/'
        },
        {
            title: "Gallery App",
            src: "/pro-05.png",
            link: 'https://gallery-asad.vercel.app/'
        },
        {
            title: "Blog Website",
            src: "/pro-06.png",
            link: 'https://blog-website-two-sage.vercel.app/'
        }
    ]
    return (
        <div className='grid grid-cols-3  justify-between gap-10 mt-10 translate-x-6'>
            {
                card.map((item, idx) => (
                    <div key={idx} className='relative'>
                        <div className='h-100 rounded-lg  hover:scale-110 duration-500 overflow-hidden' >
                            <Image
                                className='rounded-lg hover:blur-none blur-xs'
                                width={400}
                                height={100}
                                src={item.src}
                                alt=''
                            />
                        </div>
                        <div className={`absolute ${idx === 5 ? 'text-black' : 'text-white'} bottom-10 space-y-8 p-4 text-center rounded-lg left-28  bg-white/10 backdrop-blur-xs`}>
                            <p className='text-lg text-gray-300 font-semibold'>Development</p>
                            <h1 className='font-bold'>{item.title}</h1>
                            <a target='_blank' href={item.link}><Button title='view details' /></a>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default ProjectCard
