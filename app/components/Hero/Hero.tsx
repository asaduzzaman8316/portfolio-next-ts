import TextType from "../Animation/TextType"

const Hero = () => {
  return (
    <div className='bg-image bg-no-repeat bg-cover object-cover'>
      <div className="relative 2xl:container  px-14 mx-auto  2xl:px-0">
        <div className='flex flex-col justify-center h-screen '>
          <h1 className='text-xl tracking-widest uppercase leading-16'>Freelance digital designer</h1>
          <div className="flex  gap-5 ">
            <h1 className='lg:text-5xl 2xl:text-7xl font-semibold'>Hello, I’m <span className='text-red-500'>Nancy</span> </h1>
            <TextType
              text={["Welcome to  my World.", "Welcome to  my World.", "Happy coding!"]}
              typingSpeed={75}
              pauseDuration={1500}
              showCursor={true}
              cursorCharacter="_"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
