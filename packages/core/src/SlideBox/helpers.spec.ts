import { getVisibleSlides, getCustomWidths } from './helpers'

describe('getVisibleSlidesArray', () => {
  it('Array of visible slides', () => {
    expect(getVisibleSlides([2, 4, 8])).toEqual([1 / 2, 1 / 4, 1 / 8])
  })
  it('int visible slides', () => {
    expect(getVisibleSlides(3)).toEqual([1 / 1.2, null, null, 1 / 2.2, 1 / 3])
  })
})

describe('getCustomWidths', () => {
  it('First slide', () => {
    expect(getCustomWidths([60, 40], 0)).toEqual([1 / 1.2, null, null, 1 / 2.2, '60%'])
  })
  it('Second slide', () => {
    expect(getCustomWidths([60, 40], 1)).toEqual([1 / 1.2, null, null, 1 / 2.2, '40%'])
  })
})
