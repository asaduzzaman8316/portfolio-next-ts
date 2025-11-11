import Image from "next/image"
import TextType from "../Animation/TextType"

const Hero = () => {
  return (
    <div className='bg-image  bg-no-repeat bg-cover object-cover bg-[#E8ECEF]'>
      <div className="container relative  overflow-hidden px-4 mx-auto 2xl:px-0">
        <Image
          className="  h-auto w-auto 2xl:translate-x-3/4"
          width={800}
          height={800}
          src={'/heroimage1.png'}
          alt="hero image , Asaduzzaman8316, asaduzzaman8316"
        />
        <div data-speed='0.8' className="absolute z-10 top-2/4  lg:top-1/2 lg:-translate-y-1/2 md:top-2/4 w-full px-4 ">
          <div className='flex flex-col justify-center'>
            <h1 className='text-sm sm:text-base md:text-lg lg:text-xl tracking-widest uppercase leading-6 sm:leading-8'>Font-End Web Devloper</h1>
            <div className="flex flex-col lg:flex-row gap-3 sm:gap-4 md:gap-5 mt-2 sm:mt-3 md:mt-4">
              <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl 2xl:text-7xl font-semibold leading-tight'>Hello, I&apos;m <span className='text-red-500'>Asaduzzaman</span></h1>
              <TextType
                text={["LIfe is Coding", "", ""]}
                typingSpeed={75}
                pauseDuration={1500}
                showCursor={true}
                cursorCharacter="_"
                textColors={['red']}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
