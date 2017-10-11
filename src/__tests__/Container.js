import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import { Container } from '..'

describe('Container', () => {
  test('renders with default align, no max width', () => {
    const json = renderer.create(<Container />).toJSON()
    expect(json).toMatchSnapshot()
  })
  
  test('renders with left align', () => {
    const json = renderer.create(<Container align='left' maxWidth={1024} />).toJSON()
    expect(json).toMatchSnapshot()
  })

  test('renders with right align', () => {
    const json = renderer.create(<Container align='right' maxWidth={1024} />).toJSON()
    expect(json).toMatchSnapshot()
  })
})