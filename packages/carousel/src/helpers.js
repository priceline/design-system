import { useState, useEffect } from 'react'
import moize from 'moize'
import { v4 as uuidv4 } from 'uuid'
import {
  XS_VISIBLE_SLIDES,
  SM_VISIBLE_SLIDES,
  XS_VISIBLE_SLIDES_WIDTH,
  SM_VISIBLE_SLIDES_WIDTH,
} from './constants'

const getSlideKey = moize(uuidv4)

const getVisibleSlidesArray = (visibleSlides) =>
  Array.isArray(visibleSlides) ? visibleSlides : [XS_VISIBLE_SLIDES, SM_VISIBLE_SLIDES, visibleSlides]

const responsiveVisibleSlides = (visibleSlides) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  })
  if (windowWidth < XS_VISIBLE_SLIDES_WIDTH) {
    return visibleSlides[0]
  } else if (windowWidth < SM_VISIBLE_SLIDES_WIDTH) {
    return visibleSlides[1]
  } else {
    return visibleSlides[2]
  }
}

export { getSlideKey, responsiveVisibleSlides, getVisibleSlidesArray }
