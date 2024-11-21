import { useState } from 'react'

/**
 * Custom hook that returns:
 * 1. The snap position of the drawer container
 * 2. The snap handler which dictates the snapping position depending on current position
 *
 * Designed to support 3 snap points so far.
 */
export function useSnap(snapHeights) {
  const [TOP, MIDDLE, BOTTOM] = snapHeights || []
  const SCROLL_THRESHOLD = 100
  const [snapPosition, setSnapPosition] = useState<string>(TOP)

  const handleSnap = (...args) => {
    let info = args?.[1]
    let scrollOffset = info.offset.y

    const SCROLL_DOWN = scrollOffset > SCROLL_THRESHOLD
    const SCROLL_UP = scrollOffset < -SCROLL_THRESHOLD

    // Scroll down logic
    if (SCROLL_DOWN) {
      if (snapPosition === TOP) setSnapPosition(MIDDLE)
      if (snapPosition === MIDDLE) setSnapPosition(BOTTOM)
    }

    // Scroll up logic
    else if (SCROLL_UP) {
      if (snapPosition === BOTTOM) setSnapPosition(MIDDLE)
      if (snapPosition === MIDDLE) setSnapPosition(TOP)
    }
  }

  return { snapPosition, handleSnap }
}
