import Image from 'next/image'
const cardlink = ['/brand-01.png','/brand-02.png', '/brand-03.png', '/brand-04.png', '/brand-05.png', '/brand-06.png']
function ClientCard() {

  return (
    <div className='grid lg:grid-cols-3 gap-4 mt-12 '>
      {
        cardlink.map((item, idx)=>(
            <div key={idx}
            className='border group flex duration-200 transition-all p-14 ease-in-out justify-center items-center  border-gray-100 h-60 hover:scale-105 hover:rounded-lg hover:bg-[#F9004D]'
            >
                <Image
                className='lg:opacity-70 group-hover:invert transition-all ease-in-out  duration-200  group-hover:brightness-0   group-hover:opacity-100 '
                width={150}
                height={100}
                src={item}
                alt='brand logo'
                />
            </div>
        ))
      }
    </div>
  )
}

export default ClientCard
