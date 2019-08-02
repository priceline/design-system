import React from 'react'
import { Container } from '../src'

describe('Container', () => {
  test('renders with default theme max-width', () => {
    const json = rendererCreateWithTheme(<Container />).toJSON()
    expect(json).toMatchSnapshot()
  })

  test('renders with maxWidth', () => {
    const json = rendererCreateWithTheme(<Container maxWidth={1024} />).toJSON()
    expect(json).toMatchSnapshot()
  })
})
