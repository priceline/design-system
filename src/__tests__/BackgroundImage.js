import React from 'react'
import renderer from 'react-test-renderer'
import { BackgroundImage, theme } from '..'

describe('BackgroundImage', () => {
  test('renders', () => {
    const json = renderer.create(<BackgroundImage theme={theme} />).toJSON()
    expect(json).toMatchSnapshot()
  })

  test('renders with image', () => {
    const json = renderer
      .create(<BackgroundImage image="hello.png" theme={theme} />)
      .toJSON()
    expect(json).toMatchSnapshot()
  })

  test('renders with height', () => {
    const json = renderer
      .create(<BackgroundImage height="320px" theme={theme} />)
      .toJSON()
    expect(json).toMatchSnapshot()
  })
})
