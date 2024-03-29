import React from 'react'
import { ToggleBadge } from '../ToggleBadge/ToggleBadge'
import { createTheme } from '../utils/createTheme'

describe('ToggleBadge', () => {
  let consoleError
  let theme
  beforeEach(() => {
    consoleError = console.error
    console.error = jest.fn()
    theme = createTheme()
  })
  afterEach(() => (console.error = consoleError))

  test('selected ToggleBadge renders with default props', () => {
    const json = rendererCreateWithTheme(<ToggleBadge selected />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('background-color', theme.colors.lightBlue)
    expect(json).toHaveStyleRule('color', theme.colors.blue)
  })

  test('unselected ToggleBadge renders with default props', () => {
    const json = rendererCreateWithTheme(<ToggleBadge />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('color', theme.colors.blue)
  })

  test('selected one with background-color and text color passed as props hover state', () => {
    const json = rendererCreateWithTheme(
      <ToggleBadge selected bg='secondary' color='error' fontSize={1} />
    ).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('background-color', theme.palette.secondary.light)
    expect(json).toHaveStyleRule('color', theme.palette.error.base)
  })
})
