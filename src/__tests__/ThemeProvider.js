import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import { ThemeProvider, theme } from '..'
import { Base } from '../ThemeProvider'

describe('ThemeProvider', () => {
  test('renders', () => {
    const json = renderer.create(<ThemeProvider />).toJSON()
    expect(json).toMatchSnapshot()
  })

  test('Base component includes a font', () => {
    const json = renderer.create(<Base />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('font-family', theme.font)
  })
})

