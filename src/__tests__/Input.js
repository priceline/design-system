import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import { ThemeProvider, Input } from '..'

describe('Input', () => {
  test('it renders', () => {
    const json = renderer
      .create(
        <ThemeProvider>
          <Input />
        </ThemeProvider>
      )
      .toJSON()
    expect(json).toMatchSnapshot()
  })
  test('it renders an input element with a red border with a color prop is passed', () => {
    const json = renderer
      .create(
        <ThemeProvider>
          <Input color="red" />
        </ThemeProvider>
      )
      .toJSON()
    expect(json).toMatchSnapshot()
  })
  test('it renders an input element with a really large padding and margin', () => {
    const json = renderer
      .create(
        <ThemeProvider>
          <Input p={4} m={4} />
        </ThemeProvider>
      )
      .toJSON()
    expect(json).toMatchSnapshot()
  })
  test('it renders an input element with large text', () => {
    const json = renderer
      .create(
        <ThemeProvider>
          <Input fontSize={4} />
        </ThemeProvider>
      )
      .toJSON()
    expect(json).toMatchSnapshot()
  })
})
