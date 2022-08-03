import { layoutToFlexWidths } from './layoutToFlexWidths'

describe('layoutToFlexWidths', () => {
  it('should return empty array if no layout given', () => {
    expect(layoutToFlexWidths()).toEqual([])
  })

  it('should return array of percentages for layout based on totalSlides', () => {
    expect(layoutToFlexWidths('25-75', 10)).toEqual(['5%', '15%'])
    expect(layoutToFlexWidths('25-25-25-25', 20)).toEqual(['5%', '5%', '5%', '5%'])
    expect(layoutToFlexWidths('33-33-33', 10)).toEqual(['10%', '10%', '10%'])
  })
})
