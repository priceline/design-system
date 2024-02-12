import { useState, useEffect } from 'react'
import { getScrollPercentage, delay, addScrollListener } from './helpers'

const useFloatingActinButton = ({ hideUntilScrollPercent, delayDisplayMs }) => {
  const displayOnLoad = hideUntilScrollPercent ? false : true
  const [showFab, setShowFab] = useState(displayOnLoad)
  const [showWrapper, setShowWrapper] = useState(displayOnLoad)
  const [isDelayedDisplay, setIsDelayedDisplay] = useState(delayDisplayMs ? true : false)

  const enterAnimation = async () => {
    setShowFab(true)
    setShowWrapper(true)
  }

  const exitAnimation = async () => {
    setShowFab(false)
    await delay(100)
    setShowWrapper(false)
  }

  const handleScroll = async () =>
    getScrollPercentage() > hideUntilScrollPercent
      ? enterAnimation()
      : exitAnimation()
          .then(() => {
            //Do Nothing
          })
          .catch(() => {
            //Do nothing
          })

  const delayDisplay = async () =>
    delay(delayDisplayMs)
      .then(() => {
        setIsDelayedDisplay(false)
      })
      .catch(() => {
        //Do nothing
      })

  useEffect(() => typeof window !== 'undefined' && hideUntilScrollPercent && addScrollListener(handleScroll))

  useEffect(() => {
    delayDisplay()
      .then(() => {
        //Do nothing
      })
      .catch(() => {
        //Do nothing
      })
  }, [delayDisplayMs])

  return {
    showFab,
    showWrapper,
    isDelayedDisplay,
  }
}

export { useFloatingActinButton }
