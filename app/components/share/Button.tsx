import React from 'react'
import { useNavigate } from 'react-router-dom'

const Button = ({ title}: { title: string }) => {
    return (
        <div>
            <button className='uppercase text-lg px-4 border-2 rounded-md border-gray-500 py-1.5 hover:bg-red-500 hover:text-white  hover:-translate-y-1 hover:border-red-500 duration-500 transition-all cursor-pointer'
            >
                {title}
            </button>
        </div>
    )
}

export default Button
