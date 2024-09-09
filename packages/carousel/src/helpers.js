import { useState, useEffect } from 'react'
import moize from 'moize'
import { v4 as uuidv4 } from 'uuid'
import {
  VISIBLE_SLIDES_BREAKPOINT_1,
  VISIBLE_SLIDES_BREAKPOINT_2,
  CAROUSEL_BREAKPOINT_1,
  CAROUSEL_BREAKPOINT_2,
  MEDIA_QUERY_MATCH
} from './constants'
import debounce from 'lodash.debounce'

const getSlideKey = moize(uuidv4, { profileName: 'getSlideKey' })

const getVisibleSlidesArray = (visibleSlides) =>
  Array.isArray(visibleSlides)
    ? visibleSlides
    : [VISIBLE_SLIDES_BREAKPOINT_1, VISIBLE_SLIDES_BREAKPOINT_2, visibleSlides]

const getVisibleSlides = (visibleSlides, windowWidth) =>
  windowWidth < CAROUSEL_BREAKPOINT_1
    ? visibleSlides[0]
    : windowWidth < CAROUSEL_BREAKPOINT_2
      ? visibleSlides[1]
      : visibleSlides[2]

const useResponsiveVisibleSlides = (visibleSlides) => {
  const DEFAULT_WIDTH = 1024
  const [width, setWidth] = useState(DEFAULT_WIDTH)

  useEffect(() => {
    if (typeof window === 'undefined') return {
      responsiveVisibleSlides: getVisibleSlides(visibleSlides, width),
      browserWidth: width,
    }

    const handleResize = () => {
      setWidth(window.innerWidth)
    }

    const handleResizeDebounced = debounce(handleResize, 250)

    let mediaQueryList
    try {
      mediaQueryList = window.matchMedia(MEDIA_QUERY_MATCH)
      mediaQueryList.addEventListener('change', handleResizeDebounced) 
    } catch {
      window.addEventListener('resize', handleResizeDebounced)
    }
    handleResize()
    return () => {
      if (mediaQueryList?.removeEventListener) {
        mediaQueryList.removeEventListener('change', handleResizeDebounced)
      } else {
        window.removeEventListener('resize', handleResizeDebounced)
      }
    }
  }, [])
  const responsiveVisibleSlides = getVisibleSlides(visibleSlides, width)

  return {
    responsiveVisibleSlides,
    browserWidth: width,
  }
}


//This is to keep consistant with previous version.
//We should make a major version release that will allow more breakpoints
const getMobileVisibleSlidesArray = (visibleSlides) => [visibleSlides[0], null, visibleSlides[1]]

const getMobileVisibleSlides = (visibleSlides) =>
  Array.isArray(visibleSlides) ? getMobileVisibleSlidesArray(visibleSlides) : visibleSlides

export {
  getSlideKey,
  getVisibleSlidesArray,
  useResponsiveVisibleSlides,
  getMobileVisibleSlides,
}
