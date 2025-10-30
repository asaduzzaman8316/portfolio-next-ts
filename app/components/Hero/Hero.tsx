import Image from 'next/image'

const Hero = () => {
  return (
    <div className="relative px-14 mx-auto">
      <div className='absolute top-0 right-0 -z-10'>
        <Image
          width={1500}
          height={50}
          src={'/bg.jpg'}
          alt='backgroudimage'
        />
      </div>
      <div className='flex flex-col justify-center h-screen '>
        <h1 className='text-xl tracking-widest uppercase leading-16'>Freelance digital designer</h1>
        <h1 className='text-6xl font-semibold'>Hello, I’m <span className='text-red-500'>Nancy</span> Welcome to <br /> my World.</h1>
      </div>
    </div>
  )
}

export default Hero
