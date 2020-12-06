import React from 'react'
import { render } from 'testing-library'

import { Input, theme, createTheme, getPaletteColor } from '..'

const id = 'fake-test-id'

describe('Input', () => {
  test('it renders', () => {
    const json = rendererCreateWithTheme(<Input id={id} />).toJSON()
    expect(json).toMatchSnapshot()
  })
  test('it renders an input element with a red border with a color prop is passed', () => {
    const json = rendererCreateWithTheme(<Input id={id} color='red' />).toJSON()
    expect(json).toMatchSnapshot()
  })
  test('it renders an input element with a really large padding and margin', () => {
    const json = rendererCreateWithTheme(<Input id={id} p={4} m={4} />).toJSON()
    expect(json).toMatchSnapshot()
  })
  test('it renders an input element with large text', () => {
    const json = rendererCreateWithTheme(
      <Input id={id} fontSize={4} />
    ).toJSON()
    expect(json).toMatchSnapshot()
  })
  test('it renders an input element with helper text', () => {
    const helperText = 'hello world'
    const { getByText } = render(
      <Input id={id} fontSize={4} helperText={helperText} />
    )
    const helperTextNode = getByText(helperText)
    expect(helperTextNode).not.toBeNull()
    expect(helperTextNode).toHaveStyleRule(
      'color',
      getPaletteColor('error.base')({ theme: createTheme(theme) })
    )
  })
})
