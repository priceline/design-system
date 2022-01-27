import React from 'react'

import { TextArea } from '..'

const id = 'fake-test-id'

describe('TextArea', () => {
  test('it renders', () => {
    const json = rendererCreateWithTheme(<TextArea id={id} />).toJSON()
    expect(json).toMatchSnapshot()
  })
  test('it renders an input element with a red border with a color prop is passed', () => {
    const json = rendererCreateWithTheme(<TextArea id={id} color='error' />).toJSON()
    expect(json).toMatchSnapshot()
  })
  test('it renders an input element with a really large padding and margin', () => {
    const json = rendererCreateWithTheme(<TextArea id={id} p={4} m={4} />).toJSON()
    expect(json).toMatchSnapshot()
  })
  test('it renders an input element with large text', () => {
    const json = rendererCreateWithTheme(<TextArea id={id} fontSize={4} />).toJSON()
    expect(json).toMatchSnapshot()
  })
})
