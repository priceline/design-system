import { useState, useEffect } from 'react'
import moize from 'moize'
import { v4 as uuidv4 } from 'uuid'
import {
  VISIBLE_SLIDES_BREAKPOINT_1,
  VISIBLE_SLIDES_BREAKPOINT_2,
  CAROUSEL_BREAKPOINT_1,
  CAROUSEL_BREAKPOINT_2,
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

const useResponsiveVisibleSlides = (visibleSlidesArray) => {
  const [width, setWidth] = useState(1024)
  
  useEffect(() => {
    if (typeof window === 'undefined') return

    const handleResize = () => {
      setWidth(window.innerWidth)
    }
    const handleResizeDebounced = debounce(handleResize, 250)

    window.addEventListener('resize', handleResizeDebounced)
    handleResize()

    return () => window.removeEventListener('resize', handleResizeDebounced)
  }, [])

  const responsiveVisibleSlides = getVisibleSlides(visibleSlidesArray, width)

  return { responsiveVisibleSlides, browserWidth: width }
}


//This is to keep consistant with previous version.
//We should make a major version release that will allow more breakpoints
const getMobileVisibleSlidesArray = (visibleSlides) => [visibleSlides[0], null, visibleSlides[1]]

const getMobileVisibleSlides = (visibleSlides) =>
  Array.isArray(visibleSlides) ? getMobileVisibleSlidesArray(visibleSlides) : visibleSlides

const useIsBrowser = () => {
  const [isBrowser, setIsBrowser] = useState(false)
  useEffect(() => {
    setIsBrowser(typeof window !== 'undefined')
  }, [])
  return isBrowser
}

export {
  getSlideKey,
  getVisibleSlidesArray,
  useIsBrowser,
  useResponsiveVisibleSlides,
  getVisibleSlides,
  getMobileVisibleSlides,
}
