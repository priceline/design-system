import React from 'react'
import renderer from 'react-test-renderer'
import { ThemeProvider, theme, Box } from '..'
import { Base, pxToEm } from '../ThemeProvider'

describe('ThemeProvider', () => {
  test('renders', () => {
    const json = renderer.create(<ThemeProvider />).toJSON()
    expect(json).toMatchSnapshot()
  })

  test('renders with legacy prop', () => {
    const json = renderer.create(<ThemeProvider legacy />).toJSON()
    expect(json).toMatchSnapshot()
  })

  test('Base component includes a font', () => {
    const json = renderer.create(<Base theme={theme} />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('font-family', theme.font)
  })

  test('pxToEm converts pixel values to em', () => {
    const em = pxToEm(256)
    expect(em).toEqual(16)
  })

  test('accepts a custom breakpoints prop', () => {
    const json = renderer
      .create(
        <ThemeProvider customBreakpoints={[320, 512, 768, 1024]}>
          <Box width={[1, 1 / 2, 1 / 4]} />
        </ThemeProvider>
      )
      .toJSON()
    const [box] = json.children
    expect(json).toMatchSnapshot()
    expect(box).toHaveStyleRule('width', '100%')
    expect(box).toHaveStyleRule('width', '50%', {
      media: 'screen and (min-width:20em)'
    })
    expect(box).toHaveStyleRule('width', '25%', {
      media: 'screen and (min-width:32em)'
    })
  })
})
