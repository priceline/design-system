import { borderRadiusAttrs } from '.'
import { borderRadiusValues, roundedValues, createTheme } from '..'

const theme = createTheme()

describe('borderRadiusAttrs', () => {
  it.each(borderRadiusValues)('works with rounded=full and borderRadius=%s', (radius) => {
    const attrs = borderRadiusAttrs({ borderRadius: radius, rounded: null, theme })

    expect(attrs).toMatchSnapshot()
  })
  it.each(roundedValues)('works with rounded=%s and borderRadius=xl', (rounded) => {
    const attrs = borderRadiusAttrs({ borderRadius: 'xl', rounded, theme })

    expect(attrs).toMatchSnapshot()
  })

  it('should handle an array prop', () => {
    const attrs = borderRadiusAttrs({ borderRadius: [...borderRadiusValues, '9999px'], rounded: null, theme })

    expect(attrs).toMatchSnapshot()
  })
})
