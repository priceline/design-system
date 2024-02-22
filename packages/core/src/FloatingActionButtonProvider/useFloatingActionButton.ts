import { useState, useEffect } from 'react'
import { getScrollPercentage, delay, addScrollListener } from './helpers'

const useFloatingActinButton = ({ hideUntilScrollPercent, delayDisplayMs }) => {
  const [showFab, setShowFab] = useState(hideUntilScrollPercent || delayDisplayMs ? false : true)

  const handleScroll = () => {
    setShowFab(getScrollPercentage() > hideUntilScrollPercent)
  }

  useEffect(() => typeof window !== 'undefined' && hideUntilScrollPercent && addScrollListener(handleScroll))

  useEffect(() => {
    delay(delayDisplayMs)
      .then(() => {
        setShowFab(true)
      })
      .catch(() => {
        setShowFab(true)
      })
  }, [delayDisplayMs])

  return { showFab }
}

export { useFloatingActinButton }
