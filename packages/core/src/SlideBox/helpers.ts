const getWidth = (visibleSlides) => 1 / visibleSlides

const getVisibleSlides = (visibleSlides) =>
  Array.isArray(visibleSlides)
    ? visibleSlides.map((vs) => getWidth(vs))
    : [getWidth(1.2), null, null, getWidth(2.2), getWidth(visibleSlides)]

const getCustomWidths = (widths, index) => [
  getWidth(1.2),
  null,
  null,
  getWidth(2.2),
  `${widths[(index + widths.length) % widths.length]}%`,
]

export { getVisibleSlides, getCustomWidths }
