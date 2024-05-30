import React from 'react'
import { motion } from 'framer-motion'
import GithubIcon from '@/components/Icons/GithubIcon'
import LinkedinIcon from '@/components/Icons/LinkedinIcon'
import InstagramIcon from '@/components/Icons/InstagramIcon'

const IconClickableWithAnimation = (props: any) => {
  return (
    <motion.div
      whileHover={{
        y: -3,
        transition: { duration: 0.1 },
      }}
      className=''
    >
      <a href={props.href} className='' target={'_blank'} rel='noreferrer'>
        <props.Icon className={'h-6 w-6 fill-current text-gray-400 hover:cursor-pointer hover:text-AAsecondary'} />
      </a>
    </motion.div>
  )
}
export default function SocialMediaEmail(props: { finishedLoading: boolean }) {
  return (
    <>
      <motion.div
        initial={{ y: '100%' }}
        animate={{ y: '0%' }}
        transition={{
          y: {
            delay: props.finishedLoading ? 0 : 7.4,
            duration: props.finishedLoading ? 0 : 0.5,
          },
        }}
        className='fixed bottom-0 left-0 z-10  hidden flex-row items-center justify-between px-12 lg:flex  '
      >
        <div className='flex flex-col items-center justify-center space-y-8'>
          <div className='flex flex-col items-center justify-center space-y-5'>
            {/* Github Icon */}
            <IconClickableWithAnimation Icon={GithubIcon} href={'https://github.com/sutharjitendra27'} />
            {/* Linkedin icon */}
            <IconClickableWithAnimation Icon={LinkedinIcon} href={'https://www.linkedin.com/in/sutharjitendra27/'} />
            {/* Instagram Icon */}
            <IconClickableWithAnimation Icon={InstagramIcon} href={'https://www.instagram.com/jeetu.ig'} />

            {/* Youtube Icon */}
            {/* <IconClickableWithAnimation
              Icon={YoutubeIcon}
              href={"https://www.youtube.com/@abdellatif_anaflous"}
            /> */}
          </div>
          <div className='h-28 w-0.5 bg-gray-400'></div>
        </div>
      </motion.div>

      {/* // ? Email Address bar               */}
      <motion.div
        initial={{ y: '170%' }}
        animate={{ y: '0%' }}
        // ! change delay from 0 to 11
        transition={{
          y: {
            delay: props.finishedLoading ? 0 : 7.4,
            duration: props.finishedLoading ? 0 : 0.5,
          },
        }}
        className='fixed -right-10 bottom-0 z-10 hidden flex-row items-center justify-between lg:flex'
      >
        <div className='flex flex-col items-center justify-center space-y-24'>
          {/* Open Email on click */}
          <motion.div
            initial={{ rotate: 90 }}
            whileHover={{
              y: -3,
              transition: { y: { duration: 0.1 }, rotate: { duration: 0 } },
            }}
            className=''
          >
            <a href='mailto:sutharj907@gmail.com' target={'_blank'} rel='noreferrer'>
              <span className=' font-Header tracking-wider text-gray-400 hover:cursor-pointer hover:text-AAsecondary'>
                sutharj907<span className='text-AAsecondary'>@</span>gmail
                <span className='text-AAsecondary'>.</span>com
              </span>
            </a>
          </motion.div>

          <div className='h-24 w-0.5 bg-gray-400'></div>
        </div>
      </motion.div>
    </>
  )
}
