import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import { BackgroundImage, theme } from '..'

describe('BackgroundImage', () => {
  test('renders', () => {
    const json = renderer.create(<BackgroundImage theme={theme} />).toJSON()
    expect(json).toMatchSnapshot()
  })

  // test('renders with image with webp', () => {
  //   const json = renderer.create(
  //     <BackgroundImage webP imageWebP='hello.webp' image='hello.png' theme={theme} />
  //   ).toJSON()
  //   expect(json).toMatchSnapshot()
  // })

  test('renders with image without webp', () => {
    const json = renderer.create(
      <BackgroundImage webP={false} image='hello.png' theme={theme} />
    ).toJSON()
    expect(json).toMatchSnapshot()
  })

  test('renders with height', () => {
    const json = renderer.create(<BackgroundImage height='320px' theme={theme} />).toJSON()
    expect(json).toMatchSnapshot()
  })
})
