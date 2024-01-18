import { createTheme } from '../createTheme'
import { boxShadowAttrs, boxShadowSizeValues } from './boxShadowAttrs'

const theme = createTheme()

describe('boxShadowAttrs', () => {
  it.each(boxShadowSizeValues)('works with and boxShadowSize=%s', (boxShadowSize) => {
    const attrs = boxShadowAttrs({ boxShadowSize, theme })

    expect(attrs).toMatchSnapshot()
  })

  it('should handle an array prop', () => {
    const attrs = boxShadowAttrs({ boxShadowSize: [...boxShadowSizeValues, '9999px'], theme })

    expect(attrs).toMatchSnapshot()
  })
})
