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

const getSlideKey = moize(uuidv4)

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
  useEffect(() => {
    const media = window.matchMedia(MEDIA_QUERY_MATCH)
    media.addEventListener('change', handleResize)
    return () => {
      media.removeEventListener('change', handleResize)
    }
  })
  return getVisibleSlides(visibleSlides, width)
}

export { getSlideKey, getVisibleSlidesArray, useResponsiveVisibleSlides }
