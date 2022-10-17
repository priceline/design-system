import { MAX_NUM_SLIDES_XS, MAX_NUM_SLIDES_SM } from './constants'

const getWidth = (visibleSlides) => 1 / visibleSlides

const getVisibleSlides = (visibleSlides) =>
  Array.isArray(visibleSlides)
    ? visibleSlides.map((vs) => getWidth(vs))
    : [getWidth(MAX_NUM_SLIDES_XS), getWidth(MAX_NUM_SLIDES_SM), getWidth(visibleSlides)]

const getCustomWidths = (widths, index) => [
  getWidth(MAX_NUM_SLIDES_XS),
  getWidth(MAX_NUM_SLIDES_SM),
  `${widths[(index + widths.length) % widths.length]}%`,
]

export { getVisibleSlides, getCustomWidths }
