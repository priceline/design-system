import React from 'react'

import { Flag, theme } from '..'

describe('Flag', () => {
  const consoleError = console.error
  console.error = jest.fn()
  afterAll(() => (console.error = consoleError))

  test('renders', () => {
    const json = rendererCreateWithTheme(<Flag />).toJSON()
    expect(json).toMatchSnapshot()
  })

  test('renders with width prop', () => {
    const json = rendererCreateWithTheme(<Flag width={256} />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('width', '256px')
  })

  test('renders with hex value as bg color', () => {
    const json = rendererCreateWithTheme(
      <Flag width={256} bg='#085397' />
    ).toJSON()
    expect(json).toMatchSnapshot()
    expect(json.children[1]).toHaveStyleRule('background-color', '#085397')
  })

  test('renders with theme color as bg color', () => {
    const json = rendererCreateWithTheme(
      <Flag width={256} bg='purple' />
    ).toJSON()
    expect(json).toMatchSnapshot()
    expect(json.children[1]).toHaveStyleRule(
      'background-color',
      theme.colors.purple
    )
  })
})
