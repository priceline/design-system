import { useState, useEffect } from 'react'
import { getScrollPercentage, delay, addScrollListener } from './helpers'

const useFloatingActinButton = ({ hideUntilScrollPercent, delayDisplayMs }) => {
  const displayOnLoad = hideUntilScrollPercent ? false : true
  const [showFab, setShowFab] = useState(displayOnLoad)
  const [showWrapper, setShowWrapper] = useState(displayOnLoad)
  const [isDelayedDisplay, setIsDelayedDisplay] = useState(delayDisplayMs ? true : false)

  const enterAnimation = () => {
    setShowFab(true)
    setShowWrapper(true)
  }

  const exitAnimation = async () => {
    setShowFab(false)
    await delay(100)
    setShowWrapper(false)
  }

  const handleScroll = async () => {
    ;(await getScrollPercentage()) > hideUntilScrollPercent ? enterAnimation() : exitAnimation()
  }

  const delayDisplay = async () => {
    await delay(delayDisplayMs)
    setIsDelayedDisplay(false)
  }

  useEffect(() => typeof window !== 'undefined' && hideUntilScrollPercent && addScrollListener(handleScroll))

  useEffect(() => {
    delayDisplay()
  }, [delayDisplayMs])

  return {
    showFab,
    showWrapper,
    isDelayedDisplay,
  }
}

export { useFloatingActinButton }
