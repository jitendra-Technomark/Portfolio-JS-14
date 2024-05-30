import { createContext } from 'react'

interface AppContextType {
  sharedState: {
    portfolio: {
      NavBar: {
        IntervalEvent: any
        scrolling: any
        scrollSizeY: any
      }
      Scrolling: {
        IntervalEvent: any
      }
    }
    userdata: {
      timerCookieRef: React.MutableRefObject<any>
      windowSizeTracker: React.MutableRefObject<any>
      mousePositionTracker: React.MutableRefObject<any>
    }
    typing: {
      keyboardEvent: any
      eventInputLostFocus: any
    }
    finishedLoading: boolean
  }
  setSharedState: React.Dispatch<
    React.SetStateAction<{
      portfolio: {
        NavBar: {
          IntervalEvent: any
          scrolling: any
          scrollSizeY: any
        }
        Scrolling: {
          IntervalEvent: any
        }
      }
      userdata: {
        timerCookieRef: React.MutableRefObject<any>
        windowSizeTracker: React.MutableRefObject<any>
        mousePositionTracker: React.MutableRefObject<any>
      }
      typing: {
        keyboardEvent: any
        eventInputLostFocus: any
      }
      finishedLoading: boolean
    }>
  >
}

const AppContext = createContext<AppContextType | null>(null)

export default AppContext
