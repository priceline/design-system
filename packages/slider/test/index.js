import React from 'react'
import renderer from 'react-test-renderer'
import Slider from '../src'

describe('Slider', () => {
  test('renders', () => {
    const json = renderer.create(<Slider />).toJSON()
    expect(json).toMatchSnapshot()
  })
})
