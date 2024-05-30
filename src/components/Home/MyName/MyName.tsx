import React from 'react'
import { motion } from 'framer-motion'

export default function MyName(props: { finishedLoading: boolean }) {
  return (
    <div className='flex h-full flex-col justify-center px-8 py-32 sm:px-8 sm:py-52 md:px-28 lg:px-32 xl:px-56 2xl:px-72'>
      <motion.span
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          opacity: {
            delay: props.finishedLoading ? 0 : 6.8,
            duration: props.finishedLoading ? 0 : 0.2,
          },
          y: {
            delay: props.finishedLoading ? 0 : 6.8,
            duration: props.finishedLoading ? 0 : 0.2,
          },
        }}
        className='font-mono text-AAsecondary'
      >
        Hi, my name is
      </motion.span>

      <motion.h1
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          opacity: {
            delay: props.finishedLoading ? 0 : 6.9,
            duration: props.finishedLoading ? 0 : 0.2,
          },
          y: {
            delay: props.finishedLoading ? 0 : 6.9,
            duration: props.finishedLoading ? 0 : 0.2,
          },
        }}
        className='mt-4 text-3xl font-bold text-gray-300 sm:text-5xl md:text-6xl lg:text-7xl'
      >
        Jitendra Suthar.
      </motion.h1>

      <motion.h2
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          opacity: {
            delay: props.finishedLoading ? 0 : 7,
            duration: props.finishedLoading ? 0 : 0.2,
          },
          y: {
            delay: props.finishedLoading ? 0 : 7,
            duration: props.finishedLoading ? 0 : 0.2,
          },
        }}
        className='mt-4 text-3xl font-bold text-gray-400 sm:text-5xl md:text-6xl lg:text-7xl'
      >
        I make ideas & things alive.
      </motion.h2>

      <motion.h3
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          opacity: {
            delay: props.finishedLoading ? 0 : 7.1,
            duration: props.finishedLoading ? 0 : 0.2,
          },
          y: {
            delay: props.finishedLoading ? 0 : 7.1,
            duration: props.finishedLoading ? 0 : 0.2,
          },
        }}
        className='sm:text-md mt-10 font-Header text-sm tracking-wider text-gray-400 md:text-lg'
      >
        I&apos;m a <span className='text-AAsecondary'>Full Stack Developer</span> with a passion for creating innovative digital
        solutions. My primary expertise lies in the
        <span className='text-AAsecondary'> MERN stack</span>, encompassing <span className='text-AAsecondary'>Next.js</span>,{' '}
        <span className='text-AAsecondary'>React.js</span>, <span className='text-AAsecondary'>Node.js</span>, and more. Recently,
        I have also been working with <span className='text-AAsecondary'>Go</span>. I excel in problem-solving and take pride in
        crafting outstanding web experiences. <br className='block' />
        <br className='block' />
        In addition to my development skills, I&apos;m also proficient in <span className='text-AAsecondary'>graphic design</span>
        , adding a creative touch to my projects. Whether it&apos;s coding or creating visually captivating designs, I bring a
        holistic approach to the digital realm.
      </motion.h3>

      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          opacity: {
            delay: props.finishedLoading ? 0 : 7.2,
            duration: props.finishedLoading ? 0 : 0.2,
          },
          y: {
            delay: props.finishedLoading ? 0 : 7.2,
            duration: props.finishedLoading ? 0 : 0.2,
          },
        }}
        className='mt-12'
      >
        <a href='/resume.pdf' target='_blank' rel='noreferrer'>
          <button className='rounded border border-AAsecondary bg-AAprimary px-4 py-3 text-AAsecondary hover:bg-ResumeButtonHover sm:px-8 sm:py-4'>
            Check out my resume!
          </button>
        </a>
      </motion.div>
    </div>
  )
}
