import React from 'react'
import Img from '@/components/Custom/image/img'
import ArrowIcon from '@/components/Icons/ArrowIcon'

export default function AboutMe(props: any) {
  const technologies = [
    ['Next.js', 'React.js', 'Node.js', 'MongoDB', 'MySQL', 'Go'],
    ['TypeScript', 'JavaScript (ES6+)', 'Tailwind CSS', 'HTML', 'CSS', 'Python'],
  ]

  return (
    <div id='aboutSection' data-aos='fade-up' className='flex snap-start flex-col  items-center bg-AAprimary py-20'>
      {/* // ? 0.1 About Me */}
      <div
        className='flex w-full flex-col space-y-8 px-4 sm:w-[500px] sm:px-0 
        md:w-[700px] lg:w-[900px] '
      >
        <div className='flex flex-row items-center '>
          <div className='mr-4 flex  flex-row items-center'>
            <ArrowIcon className={'h-4 w-4 flex-none translate-y-[0.5px] text-AAsecondary md:h-6 md:w-5'} />
            <span className='font-Header text-sm text-AAsecondary  sm:text-xl'> 01.</span>
            <span className='flex-none pl-4 text-lg font-bold tracking-wider text-gray-200 opacity-85 sm:text-2xl'>About Me</span>
          </div>
          <div className='ml-4 h-[0.2px] w-full bg-gray-400 sm:w-72'></div>
        </div>
        {/* // ? Paragraphs */}

        <div className='flex w-full flex-col space-y-8 sm:space-x-2 md:flex-row  md:space-x-8 md:space-y-0 '>
          <div className='w-full space-y-4 text-sm sm:text-base md:w-7/12 '>
            <div className='font-Header '>
              <span className='text-gray-400 '>
                Hello! My name is Jitendra Suthar, and I am a dedicated Full Stack Developer with a passion for creating
                innovative digital solutions. My journey into the world of technology began when I pursued my Bachelor of Computer
                Applications (BCA) and continued with my Master of Computer Applications (MCA) degree. This academic pursuit
                ignited my interest in programming, setting the stage for my programming journey.
              </span>
            </div>
            <div className='font-Header '>
              <span className='text-gray-400'>
                Since pursuing my MCA degree, my career has taken me through diverse industries, allowing me to refine my
                expertise in desktop and web development. My primary focus lies in the{' '}
                <span className='text-AAsecondary'>MERN stack</span>, which includes{' '}
                <span className='text-AAsecondary'>Next.js</span>, <span className='text-AAsecondary'>React.js</span>,{' '}
                <span className='text-AAsecondary'>Node.js</span>, and more, including{' '}
                <span className='text-AAsecondary'>Go</span> now. I excel in problem-solving and take pride in crafting
                outstanding web experiences.
                <br />
                With a keen eye for design, I add an artistic flair to my projects, creating visually appealing experiences that
                complement my development skills.
              </span>
            </div>

            <div className='font-Header tracking-wide'>
              <span className='text-gray-400  '>Here are a few technologies I&apos;ve been working with recently :</span>
            </div>
            <div className='flex flex-row space-x-16 font-Header tracking-wide'>
              <div className='flex flex-row items-center space-x-2'>
                <div className='flex flex-col space-y-4 text-sm sm:text-base'>
                  {technologies[0].map((tech, index) => {
                    return (
                      <div key={index} className='flex flex-row items-center space-x-2'>
                        <ArrowIcon className={'h-3 w-3 text-AAsecondary'} />
                        <span className='text-xs text-gray-400 sm:text-sm'>{tech}</span>
                      </div>
                    )
                  })}
                </div>
              </div>
              <div className='flex flex-row items-center space-x-2'>
                <div className='flex flex-col space-y-4 text-sm sm:text-base'>
                  {technologies[1].map((tech, index) => {
                    return (
                      <div key={index} className='flex flex-row items-center space-x-2'>
                        <ArrowIcon className={'h-3 w-3 text-AAsecondary'} />
                        <span className='text-xs text-gray-400 sm:text-sm'>{tech}</span>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
          {/* // ? Image in Desktop and Tablet */}
          <div className='group relative hidden md:block md:h-72 md:w-72 lg:h-96 lg:w-96 '>
            <div
              className='absolute h-5/6
               w-5/6 translate-x-5 translate-y-5 rounded border-2 border-AAsecondary duration-300 
               group-hover:translate-x-3 group-hover:translate-y-3'
            ></div>

            <div className='absolute h-5/6 w-5/6  overflow-hidden rounded'>
              <div className='absolute h-full w-full overflow-hidden rounded bg-AAsecondary opacity-5 duration-300 group-hover:opacity-0'></div>
              <Img src={'/img/logo2.JPG'} className={'rounded-lg object-contain'} alt='My Image Not Found' />
            </div>
          </div>
          {/* // ?Image in Mobile */}
          <div className='relative right-4 top-10 flex h-48 w-full items-center justify-center md:hidden'>
            <div className='absolute h-full w-48 translate-x-5 translate-y-5 rounded border-2 border-AAsecondary'></div>
            <div className='absolute h-full w-48 overflow-hidden rounded'>
              <Img src={'/img/logo2.JPG'} className={'rounded-lg object-contain'} alt='My Image Not Found' />
            </div>
            <div className='absolute h-full w-48 overflow-hidden rounded bg-AAsecondary  opacity-10 md:opacity-60'></div>
          </div>
        </div>
      </div>
    </div>
  )
}
