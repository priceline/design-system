import React from 'react'

import { Flag, theme } from '..'

describe('Flag', () => {
  let consoleError
  beforeEach(() => {
    consoleError = console.error
    console.error = jest.fn()
  })
  afterEach(() => (console.error = consoleError))

  test('renders', () => {
    const json = rendererCreateWithTheme(<Flag />).toJSON()
    expect(json).toMatchSnapshot()
  })

  test('renders with width prop', () => {
    const json = rendererCreateWithTheme(<Flag width={256} />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('width', '256px')
  })

  test('renders with theme color as bg color', () => {
    const json = rendererCreateWithTheme(<Flag width={256} bg='purple' />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json.children[1]).toHaveStyleRule('background-color', theme.colors.purple)
  })
})
