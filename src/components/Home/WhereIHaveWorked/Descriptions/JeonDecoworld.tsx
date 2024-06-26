import React from 'react'
import ArrowIcon from '@/components/Icons/ArrowIcon'
import { getTasksTextWithHighlightedKeyword } from './taskAndType'

export default function JeonDecoworld() {
  const tasks = [
    {
      text: 'As a part of my work with Jeon Decoworld Private Limited, I had the opportunity to develop their website from concept to completion.',
      keywords: ['Jeon Decoworld Private Limited', 'website'],
    },
    {
      text: 'The website showcases their products, services, and company information, providing visitors with a comprehensive overview of what they offer.',
      keywords: ['comprehensive overview'],
    },
    {
      text: 'It was a collaborative effort aimed at enhancing the online presence and branding of Jeon Decoworld.',
      keywords: ['online presence', 'branding'],
    },
  ]

  return (
    <>
      <div className='flex max-w-xl flex-col space-y-5 px-4 md:px-0'>
        <div className='spacey-y-2 flex flex-col'>
          {/* Title */}
          <span className='font-Arimo text-sm tracking-wide text-AAsecondary sm:text-lg'>Freelance Web Developer</span>
          {/* Date */}
          <span className='font-mono text-xs text-gray-500'>May 2022 - June 2022</span>
          <span
            className='font-mono text-xs text-AAsecondary hover:cursor-pointer'
            style={{ fontSize: '0.6rem' }}
            // set on click to open the website
            onClick={() => window.open('https://jeondecoworld.in/', '_blank')}
          >
            www.jeondecoworld.in
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
