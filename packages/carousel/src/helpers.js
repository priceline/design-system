import { useState, useEffect } from 'react'
import moize from 'moize'
import { v4 as uuidv4 } from 'uuid'
import {
  XS_VISIBLE_SLIDES,
  SM_VISIBLE_SLIDES,
  XS_VISIBLE_SLIDES_WIDTH,
  SM_VISIBLE_SLIDES_WIDTH,
  MEDIA_QUERY_MATCH,
} from './constants'
import { debounce } from 'lodash'

const getSlideKey = moize(uuidv4, { profileName: 'getSlideKey' })

const getVisibleSlidesArray = (visibleSlides) =>
  Array.isArray(visibleSlides) ? visibleSlides : [XS_VISIBLE_SLIDES, SM_VISIBLE_SLIDES, visibleSlides]

const getVisibleSlides = (visibleSlides, windowWidth) =>
  windowWidth < XS_VISIBLE_SLIDES_WIDTH
    ? visibleSlides[0]
    : windowWidth < SM_VISIBLE_SLIDES_WIDTH
    ? visibleSlides[1]
    : visibleSlides[2]

const useResponsiveVisibleSlides = (visibleSlides) => {
  const [width, setWidth] = useState(window.innerWidth)

  const handleResize = () => {
    setWidth(window.innerWidth)
  }

  // Debounce to avoid the function fire multiple times
  const handleResizeDebounced = debounce(handleResize, 250)

  useEffect(() => {
    let media
    try {
      media = window.matchMedia(MEDIA_QUERY_MATCH)
      media.addEventListener('change', handleResizeDebounced)
    } catch {
      window.addEventListener('resize', handleResizeDebounced)
    }

    return () => {
      if (media?.removeEventListener) {
        media.removeEventListener('change', handleResizeDebounced)
      } else {
        window.removeEventListener('resize', handleResizeDebounced)
      }
    }
  })

  return getVisibleSlides(visibleSlides, width)
}

export { getSlideKey, getVisibleSlidesArray, useResponsiveVisibleSlides }
