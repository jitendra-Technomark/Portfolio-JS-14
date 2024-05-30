import React from 'react'
import ArrowIcon from '@/components/Icons/ArrowIcon'
import { getTasksTextWithHighlightedKeyword } from './taskAndType'

export default function SarovarDecor() {
  const tasks = [
    {
      text: 'Within my role at Sarovar Decor, I led the creation of their website, orchestrating its development from initial concept to final execution.',
      keywords: ['Sarovar Decor', 'website', 'development'],
    },
    {
      text: "The website serves as a captivating showcase for Sarovar Decor's extensive portfolio of products, services, and company ethos.",
      keywords: ['products', 'services', 'company ethos'],
    },
    {
      text: "This collaborative endeavor was aimed at fortifying Sarovar Decor's online presence and brand resonance.",
      keywords: ['online presence', 'brand resonance'],
    },
  ]

  return (
    <>
      <div className='flex max-w-xl flex-col space-y-5 px-4 md:px-0'>
        <div className='spacey-y-2 flex flex-col'>
          {/* Title */}
          <span className='font-Arimo text-sm tracking-wide text-AAsecondary sm:text-lg'>Freelance Web Developer</span>
          {/* Date */}
          <span className='font-mono text-xs text-gray-500'>sept 2022 - Oct 2022</span>
          <span
            className='font-mono text-xs text-AAsecondary hover:cursor-pointer'
            style={{ fontSize: '0.6rem' }}
            // set on click to open the website
            onClick={() => window.open('https://sarovardecor.in/', '_blank')}
          >
            www.sarovardecor.in
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
