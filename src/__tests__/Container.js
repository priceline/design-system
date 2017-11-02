import React from 'react'
import renderer from 'react-test-renderer'
import { Container, theme } from '..'

describe('Container', () => {
  test('renders with default theme max-width', () => {
    const json = renderer.create(<Container theme={theme} />).toJSON()
    expect(json).toMatchSnapshot()
  })

  test('renders with maxWidth', () => {
    const json = renderer
      .create(<Container theme={theme} maxWidth={1024} />)
      .toJSON()
    expect(json).toMatchSnapshot()
  })
})
