import React from 'react'
import ArrowIcon from '@/components/Icons/ArrowIcon'
import { getTasksTextWithHighlightedKeyword } from './taskAndType'

export default function Technomark() {
  const tasks = [
    {
      text: 'Working on the full stack development in the Mern Stack domain using Golang, Next.js, React.js, Node.js, Express.js, TypeScript, Tailwind CSS',
      keywords: ['Golang', 'Next.js', 'React.js', 'Node.js', 'Express.js', 'TypeScript', 'Tailwind CSS'],
    },
    {
      text: 'Ensured the website&apos;s performance and responsiveness met high standards, managing a large user base to deliver a seamless user experience.',
      keywords: ['performance optimization', 'user base management', 'responsiveness', 'user experience'],
    },
    {
      text: 'Implementing website design and enhanced interactivity.',
      keywords: ['website design'],
    },
    {
      text: 'Active participation in cross-functional development teams, engaging in regular meetings to drive Full stack web development projects.',
      keywords: [
        'Full stack web development',
        'cross-functional teams',
        'smart contracts integration',
        'Ethereum Name Service (ENS)',
        'blockchain solutions',
      ],
    },
  ]

  return (
    <>
      <div className='flex max-w-xl flex-col space-y-5 px-4 md:px-0'>
        <div className='spacey-y-2 flex flex-col'>
          {/* Title */}
          <span className='font-Arimo text-sm tracking-wide text-gray-100 sm:text-lg'>
            Full Stack Developer <span className='text-AAsecondary'>@ Mern Stack</span>
          </span>
          {/* Date */}
          <span className='font-mono text-xs text-gray-500'>Jan 2023 - Present</span>
          <span
            className='font-mono text-xs text-AAsecondary hover:cursor-pointer'
            style={{ fontSize: '0.6rem' }}
            // set on click to open the website
            onClick={() => window.open('https://technomark.io/', '_blank')}
          >
            www.technomark.io
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
