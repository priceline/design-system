import React from 'react'
import renderer from 'react-test-renderer'
import { BackgroundImage } from '../src'

describe('BackgroundImage', () => {
  test('renders', () => {
    const json = renderer.create(<BackgroundImage />).toJSON()
    expect(json).toMatchSnapshot()
  })

  test('renders with image', () => {
    const json = renderer.create(<BackgroundImage image="hello.png" />).toJSON()
    expect(json).toMatchSnapshot()
  })

  test('renders with height', () => {
    const json = renderer.create(<BackgroundImage height="320px" />).toJSON()
    expect(json).toMatchSnapshot()
  })
})
