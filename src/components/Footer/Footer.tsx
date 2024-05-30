import React from 'react'
import GithubIcon from '@/components/Icons/GithubIcon'
import LinkedinIcon from '@/components/Icons/LinkedinIcon'
import InstagramIcon from '@/components/Icons/InstagramIcon'
import YoutubeIcon from '@/components/Icons/YoutubeIcon'
const ClickableIcon = (props: any) => {
  return (
    <a href={props.href} className='' target={'_blank'} rel='noreferrer'>
      <props.Icon className={'h-5 w-5 fill-current text-gray-400 hover:cursor-pointer hover:text-AAsecondary'} />
    </a>
  )
}
const IconsData = [
  { href: 'https://github.com/sutharjitendra27', Icon: GithubIcon },
  { href: 'https://www.linkedin.com/in/sutharjitendra27/', Icon: LinkedinIcon },
  { href: 'https://www.instagram.com/jeetu.ig', Icon: InstagramIcon },
  {
    href: 'https://www.youtube.com/channel/UCFl2on20UQo4RTTO3VJ8wCg',
    Icon: YoutubeIcon,
  },
]

export default function Fotter(props: { githubUrl: string; hideSocialsInDesktop: boolean }) {
  return (
    <div className='flex flex-col items-center justify-center space-y-4 bg-AAprimary py-8'>
      {/* // ? Reach me at */}
      <div className={`flex flex-row space-x-8 ${props.hideSocialsInDesktop ? 'lg:hidden' : ''}`}>
        {IconsData.map((iconData, index) => {
          return <ClickableIcon key={index} href={iconData.href} Icon={iconData.Icon} />
        })}
      </div>
      <a href='#' className='' rel='noreferrer'>
        <div
          className='group flex flex-col items-center justify-center space-y-2  font-mono 
    text-sm  text-gray-400  '
        >
          <span className='text-xs group-hover:text-AAsecondary sm:text-sm'>Built by Jitendra Suthar</span>

          {/* <span className="text-xs flex flex-row items-center space-x-2 group-hover:text-AAsecondary">
            <GithubIcon className={"w-4 h-4 text-gray-400 fill-current group-hover:text-AAsecondary"} />
            <span className="">Source code - Github</span>
          </span> */}
        </div>
      </a>
    </div>
  )
}
