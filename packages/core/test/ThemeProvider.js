import React from 'react'
import renderer from 'react-test-renderer'
import { ThemeProvider, theme, Box } from '../src'
import { Base } from '../src/ThemeProvider'

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

  test('accepts a custom breakpoints prop', () => {
    const json = renderer
      .create(
        <ThemeProvider customBreakpoints={['20em', '32em', '48em', '64em']}>
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
