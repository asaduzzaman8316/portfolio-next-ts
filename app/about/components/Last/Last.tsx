import Image from 'next/image'
import React from 'react'
const cardData = [
    {
        title:"Best prices & offers",
        bio:"Orders $50 or more"
    },
    {
        title:"Free delivery",
        bio:"24/7 amazing services"
    },
    {
        title:"Great daily deal",
        bio:"When you sign up"
    },
    {
        title:"Wide assortment",
        bio:"Mega Discounts"
    },
    {
        title:"Easy returns",
        bio:"Within 30 days"
    }
]
function Last() {
  return (
    <div className='w-[80%] mx-auto flex justify-between'>
      {
        cardData.map((item , idx)=>(
            <div key={idx} 
            className='bg-gray-100 rounded-md flex items-center gap-5 p-5'
            >
                <Image
                className='w-20'
                width={70}
                height={20}
                src={`/icon-${idx+1}.svg`}
                alt='icon'
                />
                <div className='space-y-3'>
                    <h1 className='text-lg '>{item.title}</h1>
                    <p className='text-gray-500'>{item.bio}</p>
                </div>
            </div>
        ))
      }
    </div>
  )
}

export default Last
