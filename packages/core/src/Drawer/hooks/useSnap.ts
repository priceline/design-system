import { useState } from 'react'

/**
 * Custom hook that returns:
 *
 * 1. Snap position of the drawer container
 * 2. Snap drag handler which determins the future snapping position based on current
 *
 * Designed to support 3 snap points.
 */
export function useSnap(snapHeights, snapDimensions) {
  if (!snapHeights || !snapDimensions) {
    return { snapPosition: null, handleSnap: () => {} }
  }

  const [TOP, MIDDLE, BOTTOM] = snapHeights

  const SCROLL_THRESHOLD = 100
  const [snapPosition, setSnapPosition] = useState(MIDDLE) // Changed this line

  const handleSnap = (...args) => {
    const info = args?.[1]
    const scrollOffset = info.offset.y

    const SCROLL_DOWN = scrollOffset > SCROLL_THRESHOLD
    const SCROLL_UP = scrollOffset < -SCROLL_THRESHOLD

    // Scroll down logic
    if (SCROLL_DOWN) {
      if (snapPosition === TOP) setSnapPosition(MIDDLE) // Changed this line
      if (snapPosition === MIDDLE) setSnapPosition(BOTTOM)
    }

    // Scroll up logic
    else if (SCROLL_UP) {
      if (snapPosition === BOTTOM) setSnapPosition(MIDDLE)
      if (snapPosition === MIDDLE) setSnapPosition(TOP)
      // Changed this line
    }
  }

  return { snapPosition, handleSnap }
}
