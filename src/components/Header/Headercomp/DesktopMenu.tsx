import React from 'react'
import { motion } from 'framer-motion'
import { Link as ReactScrollLink } from 'react-scroll'

export default function DesktopMenu(props: { finishedLoading: boolean }) {
  return (
    <div className='hidden flex-row items-center space-x-8 font-mono text-xs md:flex '>
      <motion.div
        initial={{
          y: -40,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          type: 'spring',
          duration: props.finishedLoading ? 0 : 1.2,
          delay: props.finishedLoading ? 0 : 5.2,
        }}
        className=' text-AAsecondary'
      >
        <ReactScrollLink to='aboutSection' spy={true} smooth={true} offset={-100} duration={200}>
          &gt; 01. <span className='text-white duration-300 hover:cursor-pointer hover:text-AAsecondary'>About</span>
        </ReactScrollLink>
      </motion.div>
      <motion.div
        initial={{
          y: -40,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          type: 'spring',
          duration: props.finishedLoading ? 0 : 1.2,
          delay: props.finishedLoading ? 0 : 5.5,
        }}
        className='text-AAsecondary'
      >
        <ReactScrollLink to='WhereIhaveWorkedSection' spy={true} smooth={true} offset={-300} duration={200}>
          &gt; 02. <span className='text-white  duration-300 hover:cursor-pointer hover:text-AAsecondary'>Experience</span>
        </ReactScrollLink>
      </motion.div>
      <motion.div
        initial={{
          y: -40,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          type: 'spring',
          duration: props.finishedLoading ? 0 : 1.2,
          delay: props.finishedLoading ? 0 : 5.8,
        }}
        className='text-AAsecondary'
      >
        <ReactScrollLink to='SomethingIveBuiltSection' spy={true} smooth={true} offset={-100} duration={200}>
          &gt; 03. <span className='text-white  duration-300 hover:cursor-pointer hover:text-AAsecondary'>Work</span>
        </ReactScrollLink>
      </motion.div>
      <motion.span
        initial={{
          y: -40,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          type: 'spring',
          duration: props.finishedLoading ? 0 : 1.2,
          delay: props.finishedLoading ? 0 : 6.1,
        }}
        className='text-AAsecondary'
      >
        <ReactScrollLink to='GetInTouchSection' spy={true} smooth={true} offset={-100} duration={200}>
          &gt; 04. <span className='text-white  duration-300 hover:cursor-pointer hover:text-AAsecondary'>Contact</span>
        </ReactScrollLink>
      </motion.span>
      <a href={'/resume.pdf'} target={'_blank'} rel='noreferrer'>
        <motion.button
          initial={{
            y: -40,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            type: 'spring',
            duration: props.finishedLoading ? 0 : 1.2,
            delay: props.finishedLoading ? 0 : 6.4,
          }}
          // onClick={()=>{router.push("/resume.pdf")}}
          className='border-spacing-2 rounded-sm border border-AAsecondary px-3 py-2 text-AAsecondary hover:bg-ResumeButtonHover'
        >
          Resume
        </motion.button>
      </a>
    </div>
  )
}
