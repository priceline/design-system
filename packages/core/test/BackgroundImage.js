import React from 'react'
import { BackgroundImage } from '../src'

describe('BackgroundImage', () => {
  test('renders', () => {
    const json = rendererCreateWithTheme(<BackgroundImage />).toJSON()
    expect(json).toMatchSnapshot()
  })

  test('renders with image', () => {
    const json = rendererCreateWithTheme(
      <BackgroundImage image="hello.png" />
    ).toJSON()
    expect(json).toMatchSnapshot()
  })

  test('renders with height', () => {
    const json = rendererCreateWithTheme(
      <BackgroundImage height="320px" />
    ).toJSON()
    expect(json).toMatchSnapshot()
  })

  describe('variations', () => {
    describe('parallax variation', () => {
      test('default render', () => {
        const json = rendererCreateWithTheme(
          <BackgroundImage variation="parallax" image="hello.png" />
        ).toJSON()
        expect(json).toMatchSnapshot()
        expect(json).toHaveStyleRule('background-attachment', 'fixed')
      })
    })
  })
})
