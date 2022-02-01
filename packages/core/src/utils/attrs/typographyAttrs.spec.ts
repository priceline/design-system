import { typographyAttrs, textStylesValues } from '.'
import { createTheme } from '..'

const theme = createTheme()

describe('typographyAttrs', () => {
  it.each(textStylesValues)('works with and textStyle=%s', (textStyle) => {
    const attrs = typographyAttrs({ textStyle, theme })

    expect(attrs).toMatchSnapshot()
  })

  it('should handle an array prop', () => {
    const attrs = typographyAttrs({ textStyle: ['title3', null, 'title2', null, 'title1'], theme })

    expect(attrs).toMatchSnapshot()
  })
})
