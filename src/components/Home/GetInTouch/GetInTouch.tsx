import React from 'react'
import ArrowIcon from '@/components/Icons/ArrowIcon'
export default function GetInTouch() {
  return (
    <div id='GetInTouchSection' data-aos='fade-up' className='flex h-96 w-full flex-col items-center space-y-4 bg-AAprimary'>
      <div className='flex flex-row items-center '>
        <ArrowIcon className='h-5 w-5 flex-none text-AAsecondary md:h-6 md:w-5' />
        <div className='flex flex-row items-center space-x-2'>
          <span className='font-sans text-sm text-AAsecondary  sm:text-base'> 04.</span>
          <span className=' font-sans text-base text-AAsecondary'>What&apos;s Next?</span>
        </div>
      </div>
      {/* // ? Get In Touch */}
      <span className='text-3xl font-bold tracking-wider text-gray-200 opacity-85 sm:text-4xl'>Get In Touch</span>
      <p className='flex px-6 text-center font-Header tracking-wider text-gray-400 sm:px-16 md:w-[600px] md:px-0'>
        Although I&apos;m Always open for any new opportunities, my inbox is open. Whether you have a question or just want to say
        hi, I&apos;ll try my best to get back to you!
      </p>
      <div className='pt-4'>
        <a href='mailto:sutharj907@gmail.com' target={'_blank'} rel='noreferrer'>
          <button
            className='rounded border-[1.5px] border-AAsecondary px-8 py-4
                            font-mono text-sm text-AAsecondary hover:bg-ResumeButtonHover '
          >
            Say Hello
          </button>
        </a>
      </div>
    </div>
  )
}
