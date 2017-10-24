import React from 'react'
import renderer from 'react-test-renderer'
import { HugBanner, Text, theme } from '..'

describe('HugBanner', () => {
  test('renders', () => {
    const json = renderer.create(<HugBanner theme={theme} />).toJSON()
    expect(json).toMatchSnapshot()
  })

  test('renders text and icon', () => {
    const json = renderer.create(<HugBanner icon='closeLight' text={<Text.span>Hello</Text.span>} theme={theme} />).toJSON()
    expect(json).toMatchSnapshot()
  })
})