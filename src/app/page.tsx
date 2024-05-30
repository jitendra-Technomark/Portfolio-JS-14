'use client'

import React, { useContext, useEffect, useState, useRef } from 'react'
import Header from '../components/Header/Header'
import Startup from '../components/Header/StartupLogo/Startup'
import MyName from '../components/Home/MyName/MyName'
import SocialMediaArround from '../components/Home/SocialMediaArround/SocialMediaArround'
import AboutMe from '../components/Home/AboutMe/AboutMe'
import WhereIHaveWorked from '../components/Home/WhereIHaveWorked/WhereIHaveWorked'
import SomethingIveBuilt from '../components/Home/SomethingIveBuilt/SomethingIveBuilt'
import GetInTouch from '../components/Home/GetInTouch/GetInTouch'
import Footer from '../components/Footer/Footer'
import AppContext from '@/context/AppContext'
import Aos from 'aos'
import 'aos/dist/aos.css'
import Head from 'next/head'

export default function Home() {
  const [showElement, setShowElement] = useState(false)
  const context: any = useContext(AppContext)
  const aboutRef = useRef<HTMLDivElement>(null)
  const homeRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    clearInterval(context.sharedState.userdata.timerCookieRef.current)
    if (typeof window !== 'undefined') {
      window.removeEventListener('resize', context.sharedState.userdata.windowSizeTracker.current)
      window.removeEventListener('mousemove', context.sharedState.userdata.mousePositionTracker.current, false)
      window.removeEventListener('resize', context.sharedState.typing.eventInputLostFocus)
      document.removeEventListener('keydown', context.sharedState.typing.keyboardEvent)
    }

    setShowElement(true)

    setTimeout(() => {
      setShowElement(false)
      const updatedSharedState = {
        ...context.sharedState,
        finishedLoading: true,
      }
      context.setSharedState(updatedSharedState)
    }, 5400)

    return () => {
      clearInterval(context.sharedState.userdata.timerCookieRef.current)
      window.removeEventListener('resize', context.sharedState.userdata.windowSizeTracker.current)
      window.removeEventListener('mousemove', context.sharedState.userdata.mousePositionTracker.current, false)
      window.removeEventListener('resize', context.sharedState.typing.eventInputLostFocus)
      document.removeEventListener('keydown', context.sharedState.typing.keyboardEvent)
    }
  }, [context])

  useEffect(() => {
    Aos.init({ duration: 2000, once: true })
  }, [])

  const meta = {
    title: 'Jitendra Suthar - Full Stack Developer',
    description: `Jitendra Suthar - Full Stack Developer passionate about crafting dynamic and responsive web applications. Explore my coding adventures!`,
    image: '/img/logo2.jpg',
    type: 'website',
  }

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name='robots' content='follow, index' />
        <meta content={meta.description} name='description' />
        <meta property='og:url' content={`https://jitendra-suthar.vercel.app/`} />
        <link rel='canonical' href={`https://jitendra-suthar.vercel.app/`} />
        <meta property='og:type' content={meta.type} />
        <meta property='og:site_name' content='Jitendra Suthar' />
        <meta property='og:description' content={meta.description} />
        <meta property='og:title' content={meta.title} />
        <meta property='og:image' content={meta.image} />
      </Head>

      <div className='relative min-h-screen w-full snap-mandatory bg-AAprimary'>
        {!context.sharedState.finishedLoading && showElement && <Startup />}
        <Header finishedLoading={context.sharedState.finishedLoading} sectionsRef={homeRef} />
        <MyName finishedLoading={context.sharedState.finishedLoading} />
        <SocialMediaArround finishedLoading={context.sharedState.finishedLoading} />
        {context.sharedState.finishedLoading && <AboutMe ref={aboutRef} />}
        {context.sharedState.finishedLoading && <WhereIHaveWorked />}
        {context.sharedState.finishedLoading && <SomethingIveBuilt />}
        {context.sharedState.finishedLoading && <GetInTouch />}
        {context.sharedState.finishedLoading && (
          <Footer githubUrl={'https://github.com/sutharjitendra27'} hideSocialsInDesktop={true} />
        )}
      </div>
    </>
  )
}
