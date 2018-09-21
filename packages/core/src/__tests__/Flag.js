import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import { ThemeProvider, Flag } from '..'

describe('Flag', () => {
  test('renders', () => {
    const json = renderer.create(<Flag />).toJSON()
    expect(json).toMatchSnapshot()
  })

  test('renders with width prop', () => {
    const json = renderer.create(<Flag width={256} />).toJSON()
    expect(json).toMatchSnapshot()
  })

  test('renders with hex value as bg color', () => {
    const json = renderer.create(<Flag width={256} bg="#085397" />).toJSON()
    expect(json).toMatchSnapshot()
  })

  test('renders with theme color as bg color', () => {
    const json = renderer
      .create(
        <ThemeProvider>
          <Flag width={256} bg="purple" />
        </ThemeProvider>
      )
      .toJSON()
    expect(json).toMatchSnapshot()
  })
})
