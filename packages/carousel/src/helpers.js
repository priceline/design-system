import { useState, useLayoutEffect } from 'react'
import moize from 'moize'
import { v4 as uuidv4 } from 'uuid'
import debounce from 'lodash.debounce'
import {
  VISIBLE_SLIDES_BREAKPOINT_1,
  VISIBLE_SLIDES_BREAKPOINT_2,
  CAROUSEL_BREAKPOINT_1,
  CAROUSEL_BREAKPOINT_2,
  MEDIA_QUERY_MATCH,
} from './constants'

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
  const [width, setWidth] = useState(window.innerWidth)

  const handleResize = debounce(() => {
    setWidth(window.innerWidth)
  }, 250)
  useLayoutEffect(() => {
    let media
    try {
      media = window.matchMedia(MEDIA_QUERY_MATCH)
      media.addEventListener('change', handleResize)
    } catch {
      window.addEventListener('resize', handleResize)
    }

    return () => {
      if (media?.removeEventListener) {
        media.removeEventListener('change', handleResize)
      } else {
        window.removeEventListener('resize', handleResize)
      }
    }
  }, [handleResize])

  return {
    responsiveVisibleSlides: getVisibleSlides(visibleSlides, width),
    browserWidth: width,
  }
}

const getMobileVisibleSlidesArray = (visibleSlides) => [visibleSlides[0], null, visibleSlides[1]]

const getMobileVisibleSlides = (visibleSlides) =>
  Array.isArray(visibleSlides) ? getMobileVisibleSlidesArray(visibleSlides) : visibleSlides

export {
  getSlideKey,
  getVisibleSlidesArray,
  useResponsiveVisibleSlides,
  getVisibleSlides,
  getMobileVisibleSlides,
}
