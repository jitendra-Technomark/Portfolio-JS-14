import React, { useState } from 'react'
import { motion } from 'framer-motion'
import ArrowIcon from '../../Icons/ArrowIcon'
import Technomark from './Descriptions/Technomark'
import JeonDecoworld from './Descriptions/JeonDecoworld'
import UmiyaDecor from './Descriptions/UmiyaDecor'
import SarovarDecor from './Descriptions/SarovarDecor'

export default function WhereIHaveWorked() {
  const [descriptionJob, setDescriptionJob] = useState<string>('Technomark')

  const GetDescription = () => {
    switch (descriptionJob) {
      case 'Technomark':
        return <Technomark />
      case 'JeonDecoworld':
        return <JeonDecoworld />
      case 'UmiyaDecor':
        return <UmiyaDecor />
      case 'SarovarDecor':
        return <SarovarDecor />
      default:
        return null
    }
  }

  return (
    <div data-aos='fade-up' className='flex flex-col items-center justify-center space-y-12 bg-AAprimary py-24'>
      {/* Title "Where I've Worked" */}
      <section className='flex flex-row items-center'>
        <div className='flex flex-row items-center'>
          <ArrowIcon className={'h-4 w-4 flex-none text-AAsecondary md:h-6 md:w-5'} />
          <span className='font-sans text-sm text-AAsecondary sm:text-xl'> 02.</span>
        </div>

        <span className='px-3 text-lg font-bold tracking-wider text-gray-200 opacity-85 md:text-2xl'>Where I've Worked</span>
        <div className='h-[0.2px] w-16 bg-gray-400 sm:w-44 md:w-80'></div>
      </section>
      {/* Where I've Worked Content section */}
      <section className='flex flex-col items-center justify-center space-y-4 md:flex-row md:items-start md:justify-center md:space-x-4 md:space-y-0 '>
        {/* Left side of Where I've Worked, contains the bar and name of companies */}
        <CompaniesBar setDescriptionJob={setDescriptionJob} />
        {/* Description for The job */}
        {GetDescription()}
      </section>
    </div>
  )
}

interface CompaniesBarProps {
  setDescriptionJob: React.Dispatch<React.SetStateAction<string>>
}

const CompaniesBar: React.FC<CompaniesBarProps> = ({ setDescriptionJob }) => {
  const [barPosition, setBarPosition] = useState<number>(-25) // Adjusted for proper alignment
  const [barAbovePosition, setBarAbovePosition] = useState<number>(-128)
  const [activeIndex, setActiveIndex] = useState<number>(0)
  const [companyNameBackgroundColorGreen, setCompanyNameBackgroundColorGreen] = useState<boolean[]>([true, false, false])

  const CompanyButton: React.FC<{
    index: number
    companyName: string
    barPosition: number
    barAbovePosition: number
    descriptionJob: string
    setActiveIndex: React.Dispatch<React.SetStateAction<number>>
  }> = ({ index, companyName, barPosition, barAbovePosition, descriptionJob, setActiveIndex }) => {
    return (
      <button
        onClick={() => {
          setBarPosition(barPosition)
          setBarAbovePosition(barAbovePosition)
          setDescriptionJob(descriptionJob)
          setActiveIndex(index)
          setCompanyNameBackgroundColorGreen(new Array(3).fill(false).fill(true, index, index + 1))
        }}
        className={`w-32 flex-none rounded py-3 text-center font-mono text-xs duration-500 hover:bg-ResumeButtonHover hover:text-AAsecondary sm:text-sm md:w-44 md:px-4 md:pl-6 md:text-left ${companyNameBackgroundColorGreen[index] ? 'bg-ResumeButtonHover text-AAsecondary' : 'text-gray-500'}`}
      >
        {companyName}
      </button>
    )
  }

  return (
    <div
      id='WhereIhaveWorkedSection'
      className='flex w-screen flex-col items-start justify-start overflow-auto pb-4 scrollbar-hide sm:items-center sm:justify-center md:flex-row md:overflow-hidden md:pb-0 lg:w-auto'
    >
      {/* left bar Holder */}
      <div className='w-34 relative order-2 hidden !h-[160px] translate-y-1 rounded bg-gray-500 md:order-1 md:block md:h-[80px] md:w-0.5'>
        {/* animated left bar */}
        <motion.div
          animate={{ y: barPosition }}
          className='absolute h-0.5 w-10 rounded bg-AAsecondary md:h-[48px] md:w-0.5'
        ></motion.div>
      </div>
      {/* Companies name as buttons */}
      <div className='order-1 flex flex-col space-y-1 pl-8 md:order-2 md:pl-0'>
        <div className='flex flex-row md:flex-col'>
          <CompanyButton
            index={0}
            companyName='TechnoMark'
            barPosition={-12}
            barAbovePosition={-128}
            descriptionJob='Technomark'
            setActiveIndex={setActiveIndex}
          />
          <CompanyButton
            index={1}
            companyName='Umiya Decor'
            barPosition={32}
            barAbovePosition={-96}
            descriptionJob='UmiyaDecor'
            setActiveIndex={setActiveIndex}
          />
          <CompanyButton
            index={2}
            companyName='Sarovar Decor'
            barPosition={75}
            barAbovePosition={-64}
            descriptionJob='SarovarDecor'
            setActiveIndex={setActiveIndex}
          />
          <CompanyButton
            index={3}
            companyName='Jeon Decoworld'
            barPosition={120}
            barAbovePosition={-32}
            descriptionJob='JeonDecoworld'
            setActiveIndex={setActiveIndex}
          />
        </div>
        <div className='block h-0.5 rounded bg-gray-500 md:hidden'>
          <motion.div animate={{ x: barAbovePosition }} className='h-0.5 w-[128px] rounded bg-AAsecondary'></motion.div>
        </div>
      </div>
    </div>
  )
}
