import { useRouter } from 'next/navigation'
import React from 'react'
import ArrowIcon from '@/components/Icons/ArrowIcon'
import Img from '@/components/Custom/image/img'
import ExternalLink from '@/components/Icons/ExternalLink'

export default function SomethingIveBuilt() {
  const router = useRouter()
  return (
    <div
      id='SomethingIveBuiltSection'
      className=' flex w-full flex-col space-y-12 bg-AAprimary px-4  
     py-32 sm:px-16 md:px-16 lg:px-24 xl:space-y-28 2xl:px-72'
    >
      {/* // ? Title  */}
      <div data-aos='fade-up' className=' flex flex-row  items-center md:px-0'>
        <ArrowIcon className={'h-5 w-5 flex-none translate-y-[2px] text-AAsecondary md:h-6 md:w-5'} />
        <div className='flex-none flex-row items-center space-x-2 pr-2'>
          <span className='font-sans text-sm text-AAsecondary  sm:text-xl'> 03.</span>
          <span className=' w-44 text-lg font-bold tracking-wider text-gray-200 opacity-85 md:w-56 md:text-2xl'>
            {' '}
            Some Things I&apos;ve Built
          </span>
        </div>
        <div className='h-[0.2px] w-full bg-gray-400 md:w-1/2 xl:w-1/3'></div>
      </div>

      <div className='flex flex-col   space-y-8 md:space-y-28 xl:space-y-36'>
        {/* // ?  Project  1*/}
        <div data-aos='fade-up' className='relative w-full md:grid md:h-96 md:grid-cols-12 '>
          {/* Left image */}
          <div
            className='absolute z-10 hidden  h-full 
          w-full grid-cols-12 content-center bg-AAprimary py-4  md:grid'
          >
            <div className='relative col-span-7 h-full w-full rounded '>
              <a href='https://jeondecoworld.in/' target={'_blank'} rel='noreferrer'>
                <div
                  className='absolute h-full w-full rounded bg-AAprimary 
           opacity-30 transition-opacity duration-300 hover:cursor-pointer hover:opacity-0'
                ></div>
              </a>

              <Img src={'/projects/jeon.png'} alt={'Project Screen shot'} className={`h-full w-full rounded `} />
            </div>
          </div>

          {/* right Content */}
          <div className=' h-full w-full  content-center py-4 md:absolute md:grid  md:grid-cols-12 '>
            {/* background for text in mobile responsive */}
            <div className='absolute z-0 h-full w-full bg-opacity-70'>
              <div className='relative h-full w-full'>
                <div className='absolute z-10 h-full w-full bg-AAsecondary opacity-10'></div>
                <div className='absolute z-10 h-full w-full bg-AAprimary opacity-80'></div>
                <Img src={'/projects/jeon.png'} alt={'Project Screen shot'} className={`h-full w-full `} />
              </div>
            </div>

            <div
              className='col-span-8 col-start-5 flex flex-col items-start space-y-3 px-8 
            pt-8 sm:pt-12 md:items-end md:py-0 xl:col-span-6 xl:col-start-7'
            >
              <div className='z-10 flex flex-col space-y-1 md:items-end'>
                <span className='text-base text-AAsecondary'>Jeon Decoworld</span>
                <a href='https://jeondecoworld.in/' target='_blank' rel='noopener noreferrer'>
                  <span className=' text-xl font-bold text-AAsecondary hover:cursor-pointer md:text-gray-200'>
                    Jeon Decoworld Pvt. Ltd.
                  </span>
                </a>
              </div>
              <div className='z-10 w-full rounded-md py-6 md:bg-AAtertiary  md:p-6'>
                <p className='text-left text-gray-300 md:text-right md:text-gray-400 '>
                  During my freelance collaboration with <span className='text-AAsecondary'>Jeon Decoworld</span>, I spearheaded
                  the development of a <span className='text-AAsecondary'>dynamic web presence</span>, crafting a{' '}
                  <span className='text-AAsecondary'>user-friendly website</span> that seamlessly integrates design and
                  functionality. Beyond website development, I curated{' '}
                  <span className='text-AAsecondary'>captivating posters</span> and{' '}
                  <span className='text-AAsecondary'>mockups</span> to enhance marketing efforts, ensuring a cohesive visual
                  narrative. The intuitive interface, designed for optimal user experience, reflects my commitment to innovative
                  solutions. This project not only demonstrates my technical expertise but also showcases my ability to harmonize
                  design aesthetics and functionality.
                </p>
              </div>
              <ul
                className='flex w-full flex-wrap font-Text2 text-sm
               text-gray-300 md:justify-end md:text-gray-400'
              >
                <span className='z-10 pr-4'>PHP</span>
                <span className='z-10 pr-4'>HTML</span>
                <span className='z-10 pr-4'>CSS</span>
                <span className='z-10 pr-4'>Bootstrap</span>
                <span className='z-10 pr-4'>JavaScript</span>
                <span className='z-10 pr-4'>Graphic Design</span>
              </ul>
              <div className='fle-row z-10 flex space-x-5 '>
                <a href='https://jeondecoworld.in/' target={'_blank'} rel='noreferrer'>
                  <ExternalLink url={''} router={router} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* // ?  Project 2 */}
        <div data-aos='fade-up' className='relative w-full md:grid md:h-96 md:grid-cols-12  '>
          {/* Left image */}
          <div
            className='absolute z-10 hidden  h-full 
          w-full grid-cols-12 content-center bg-AAprimary py-4  md:grid '
          >
            <div className='relative col-span-7 col-start-6 h-full w-full rounded '>
              <a href={'https://portfolio-jitendra.netlify.app/'} target='_blank' rel='noreferrer'>
                <div
                  className='absolute h-full w-full rounded bg-AAprimary 
           opacity-50 transition-opacity duration-300 hover:cursor-pointer hover:opacity-0'
                ></div>
              </a>
              <Img src={'/projects/portfolio.png'} alt={'Project Screen shot'} className={`h-full w-full rounded `} />
            </div>
          </div>

          {/* right Content */}
          <div className=' h-full w-full  content-center py-4 md:absolute md:grid  md:grid-cols-12 '>
            {/* background for text in mobile responsive */}
            <div className='absolute z-0 h-full w-full bg-opacity-70 md:order-2'>
              <div className='relative h-full w-full'>
                <div className='absolute z-10 h-full w-full bg-AAsecondary opacity-10'></div>
                <div className='absolute z-10 h-full w-full bg-AAprimary opacity-80'></div>
                <Img src={'/projects/portfolio.png'} alt={'Project Screen shot'} className={`h-full w-full`} />
              </div>
            </div>

            <div
              className='col-span-8 flex flex-col items-start space-y-3   
            px-8 pt-8 sm:pt-12 md:order-1  md:py-0 xl:col-span-6'
            >
              <div className='z-10 flex flex-col  space-y-1'>
                <span className='text-base text-AAsecondary'>Portfolio</span>
                <a href='https://portfolio-jitendra.netlify.app/' target='_blank' rel='noopener noreferrer'>
                  <span className=' text-xl font-bold text-AAsecondary hover:cursor-pointer md:text-gray-200'>
                    Personal Portfolio
                  </span>
                </a>
              </div>
              <div className='z-10 w-full rounded-md py-6 md:bg-AAtertiary  md:p-6'>
                <p className='text-left text-gray-300 md:text-gray-400 '>
                  In crafting my personal portfolio website using <span className='text-AAsecondary'>React.js</span>, I aimed to
                  encapsulate my professional journey and skills in a dynamic and visually compelling manner. Through meticulous{' '}
                  <span className='text-AAsecondary'>design</span> and <span className='text-AAsecondary'>development</span>, the
                  website serves as a comprehensive showcase of my <span className='text-AAsecondary'>achievements</span>,{' '}
                  <span className='text-AAsecondary'>projects</span>, and
                  <span className='text-AAsecondary'> expertise</span>. From a visually engaging presentation of my portfolio to a
                  user-friendly interface detailing my professional journey, this website stands as a testament to my commitment
                  to innovation and excellence in the field.
                </p>
              </div>
              <ul
                className='flex w-full flex-wrap font-Text2 text-sm
               text-gray-300 md:justify-start md:text-gray-400'
              >
                <span className='z-10 pr-4'>React.js</span>
                <span className='z-10 pr-4'>HTML</span>
                <span className='z-10 pr-4'>CSS</span>
                <span className='z-10 pr-4'>JavaScript</span>
                <span className='z-10 pr-4'>Graphic Design</span>
              </ul>
              <div className='fle-row z-10 flex space-x-5 '>
                {/* <GithubIcon link="https://github.com/hktitof/Ypredict" /> */}
                <a href='https://portfolio-jitendra.netlify.app/' target={'_blank'} rel='noreferrer'>
                  <ExternalLink url={''} router={router} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Project 3 */}
        <div data-aos='fade-up' className='relative w-full md:grid md:h-96 md:grid-cols-12 '>
          {/* Left image */}
          <div
            className='absolute z-10 hidden  h-full 
          w-full grid-cols-12 content-center bg-AAprimary py-4  md:grid'
          >
            <div className='relative col-span-7 h-full w-full rounded '>
              <a href='https://www.linkedin.com/in/sutharjitendra27/details/projects/' target={'_blank'} rel='noreferrer'>
                <div
                  className='absolute h-full w-full rounded bg-AAprimary 
           opacity-30 transition-opacity duration-300 hover:cursor-pointer hover:opacity-0'
                ></div>
              </a>

              <Img src={'/projects/caarify-3.png'} alt={'Project Screen shot'} className={`h-full w-full rounded `} />
            </div>
          </div>

          {/* right Content */}
          <div className=' h-full w-full  content-center py-4 md:absolute md:grid  md:grid-cols-12 '>
            {/* background for text in mobile responsive */}
            <div className='absolute z-0 h-full w-full bg-opacity-70'>
              <div className='relative h-full w-full'>
                <div className='absolute z-10 h-full w-full bg-AAsecondary opacity-10'></div>
                <div className='absolute z-10 h-full w-full bg-AAprimary opacity-80'></div>
                <Img src={'/projects/caarify-3.png'} alt={'Project Screen shot'} className={`h-full w-full `} />
              </div>
            </div>

            <div
              className='col-span-8 col-start-5 flex flex-col items-start space-y-3 px-8 
            pt-8 sm:pt-12 md:items-end md:py-0 xl:col-span-6 xl:col-start-7'
            >
              <div className='z-10 flex flex-col space-y-1 md:items-end'>
                <span className='text-base text-AAsecondary'>Caarify</span>
                <a
                  href='https://www.linkedin.com/in/sutharjitendra27/details/projects/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <span className=' text-xl font-bold text-AAsecondary hover:cursor-pointer md:text-gray-200'>
                    A Car Service Management System
                  </span>
                </a>
              </div>
              <div className='z-10 w-full rounded-md py-6 md:bg-AAtertiary  md:p-6'>
                <p className='text-left text-gray-300 md:text-right md:text-gray-400 '>
                  In my final semester of MCA, I led the development of <span className='text-AAsecondary'>Caarify</span>, a
                  progressive digital platform offering streamlined car service solutions. Taking a hands-on approach, We oversaw
                  the creation of an <span className='text-AAsecondary'>Android application </span> tailored for customers and a
                  <span className='text-AAsecondary'> web application</span> designed for administrative use. The Android app
                  empowers car owners to effortlessly schedule and manage their vehicle&apos;s maintenance, while the web app
                  provides administrators with efficient tools for overseeing the platform&apos;s operations. Key features include
                  intuitive appointment booking, timely service reminders, and accessible service history tracking.
                </p>
              </div>

              <ul
                className='flex w-full flex-wrap font-Text2 text-sm
               text-gray-300 md:justify-end md:text-gray-400'
              >
                <span className='z-10 pr-4'>Next.js</span>
                <span className='z-10 pr-4'>React.js</span>
                <span className='z-10 pr-4'>TypeScript</span>
                <span className='z-10 pr-4'>Android (Kotlin)</span>
                <span className='z-10 pr-4'>Firebase</span>
              </ul>
              <div className='fle-row z-10 flex space-x-5 '>
                <a href='https://www.linkedin.com/in/sutharjitendra27/details/projects/' target={'_blank'} rel='noreferrer'>
                  <ExternalLink url={''} router={router} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* project 4 */}
        <div data-aos='fade-up' className='relative w-full md:grid md:h-96 md:grid-cols-12  '>
          {/* Left image */}
          <div
            className='absolute z-10 hidden  h-full 
          w-full grid-cols-12 content-center bg-AAprimary py-4  md:grid '
          >
            <div className='relative col-span-7 col-start-6 h-full w-full rounded '>
              <a href={'https://www.linkedin.com/in/sutharjitendra27/details/projects/'} target='_blank' rel='noreferrer'>
                <div
                  className='absolute h-full w-full rounded bg-AAprimary 
           opacity-50 transition-opacity duration-300 hover:cursor-pointer hover:opacity-0'
                ></div>
              </a>
              <Img src={'/projects/fazemet-3.png'} alt={'Project Screen shot'} className={`h-full w-full rounded `} />
            </div>
          </div>

          {/* right Content */}
          <div className=' h-full w-full  content-center py-4 md:absolute md:grid  md:grid-cols-12 '>
            {/* background for text in mobile responsive */}
            <div className='absolute z-0 h-full w-full bg-opacity-70 md:order-2'>
              <div className='relative h-full w-full'>
                <div className='absolute z-10 h-full w-full bg-AAsecondary opacity-10'></div>
                <div className='absolute z-10 h-full w-full bg-AAprimary opacity-80'></div>
                <Img src={'/projects/fazemet-3.png'} alt={'Project Screen shot'} className={`h-full w-full`} />
              </div>
            </div>

            <div
              className='col-span-8 flex flex-col items-start space-y-3   
            px-8 pt-8 sm:pt-12 md:order-1  md:py-0 xl:col-span-6'
            >
              <div className='z-10 flex flex-col  space-y-1'>
                <span className='text-base text-AAsecondary'>FazeMet</span>
                <a
                  href='https://www.linkedin.com/in/sutharjitendra27/details/projects/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <span className=' text-xl font-bold text-AAsecondary hover:cursor-pointer md:text-gray-200'>
                    A Student Surveillance and Tracking System
                  </span>
                </a>
              </div>
              <div className='z-10 w-full rounded-md py-6 md:bg-AAtertiary  md:p-6'>
                <p className='text-left text-gray-300 md:text-gray-400 '>
                  During our participation in the&nbsp;
                  <span className='text-AAsecondary'>Smart India Hackathon</span>, We spearheaded the development of
                  <span className='text-AAsecondary'> Fazemet</span>, a cutting-edge face recognition-based system designed for
                  tracking and monitoring student activities within campus and hostel premises. This innovative project features a
                  robust
                  <span className='text-AAsecondary'> face recognition system&nbsp;</span>
                  to meticulously record student interactions and activities. Complemented by a user-friendly{' '}
                  <span className='text-AAsecondary'> web application</span>, Fazemet enables seamless management of student
                  details, activity tracking, report generation, and more. To enhance communication between parents, students, and
                  the system, we crafted a dedicated <span className='text-AAsecondary'> mobile application</span>. This mobile
                  app allows parents and students to monitor daily activities, approve or reject leave applications, ensuring a
                  comprehensive and secure solution for campus and hostel security.
                </p>
              </div>
              <ul
                className='flex w-full flex-wrap font-Text2 text-sm
               text-gray-300 md:justify-start md:text-gray-400'
              >
                <span className='z-10 pr-4'>PHP</span>
                <span className='z-10 pr-4'>HTML</span>
                <span className='z-10 pr-4'>CSS</span>
                <span className='z-10 pr-4'>Android (Java)</span>
                <span className='z-10 pr-4'>Firebase</span>
                <span className='z-10 pr-4'>Deep Learning</span>
                <span className='z-10 pr-4'>Python</span>
              </ul>
              <div className='fle-row z-10 flex space-x-5 '>
                {/* <GithubIcon link="https://github.com/hktitof/Ypredict" /> */}
                <a href='https://www.linkedin.com/in/sutharjitendra27/details/projects/' target={'_blank'} rel='noreferrer'>
                  <ExternalLink url={''} router={router} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
