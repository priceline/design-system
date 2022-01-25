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

const getVisibleSlides = (visibleSlides, windowWidth) =>
  windowWidth < XS_VISIBLE_SLIDES_WIDTH
    ? visibleSlides[0]
    : windowWidth < SM_VISIBLE_SLIDES_WIDTH
    ? visibleSlides[1]
    : visibleSlides[2]

export { getSlideKey, getVisibleSlidesArray, getVisibleSlides }
