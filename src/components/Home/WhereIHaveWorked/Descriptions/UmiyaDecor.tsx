import React from 'react'
import ArrowIcon from '@/components/Icons/ArrowIcon'
import { getTasksTextWithHighlightedKeyword } from './taskAndType'

export default function UmiyaDecor() {
  const tasks = [
    {
      text: 'During my collaboration with Umiya Decor, I spearheaded the development of their website from inception to launch.',
      keywords: ['Umiya Decor', 'website', 'development', 'inception', 'launch'],
    },
    {
      text: "The website serves as a dynamic platform to spotlight Umiya Decor's diverse range of products, services, and corporate ethos.",
      keywords: ['products', 'services', 'corporate ethos', 'dynamic platform'],
    },
    {
      text: "This project was a synergistic endeavor focused on bolstering Umiya Decor's digital footprint and brand identity.",
      keywords: ['synergistic endeavor', 'digital footprint', 'brand identity'],
    },
  ]

  return (
    <>
      <div className='flex max-w-xl flex-col space-y-5 px-4 md:px-0'>
        <div className='spacey-y-2 flex flex-col'>
          {/* Title */}
          <span className='font-Arimo text-sm tracking-wide text-AAsecondary sm:text-lg'>Freelance Web Developer</span>
          {/* Date */}
          <span className='font-mono text-xs text-gray-500'>Nov 2022 - Dec 2022</span>
          <span
            className='font-mono text-xs text-AAsecondary hover:cursor-pointer'
            style={{ fontSize: '0.6rem' }}
            // set on click to open the website
            onClick={() => window.open('https://umiyadecor.in/', '_blank')}
          >
            www.umiyadecor.in
          </span>
        </div>
        <div className='flex flex-col space-y-4 text-xs sm:text-sm'>
          {/* Tasks Description 1 */}
          {tasks.map((item, index) => {
            return (
              <div key={index} className='flex flex-row space-x-1'>
                <ArrowIcon className={' h-5 w-4 flex-none text-AAsecondary'} />
                <span
                  className='text-xs text-gray-500 sm:text-sm'
                  dangerouslySetInnerHTML={{
                    __html: getTasksTextWithHighlightedKeyword(item.text, item.keywords),
                  }}
                ></span>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}
