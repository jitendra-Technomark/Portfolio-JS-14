'use client'

import { Inter } from 'next/font/google'
import { useRef, useState } from 'react'
import { Analytics } from '@vercel/analytics/react'
import '@/styles/globals.css'
import AppContext from '@/context/AppContext'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const timerCookie = useRef(null)
  const windowSizeTrackerRef = useRef(null)
  const mousePositionRef = useRef(null)
  const [sharedState, setSharedState] = useState({
    portfolio: {
      NavBar: {
        IntervalEvent: null,
        scrolling: null,
        scrollSizeY: null,
      },
      Scrolling: {
        IntervalEvent: null,
      },
    },
    userdata: {
      timerCookieRef: timerCookie,
      windowSizeTracker: windowSizeTrackerRef,
      mousePositionTracker: mousePositionRef,
    },
    typing: {
      keyboardEvent: null,
      eventInputLostFocus: null,
    },
    finishedLoading: false,
  })
  return (
    <html lang='en'>
      <body className={inter.className}>
        <AppContext.Provider value={{ sharedState, setSharedState }}>
          {children}
          <Analytics />
        </AppContext.Provider>
      </body>
    </html>
  )
}
