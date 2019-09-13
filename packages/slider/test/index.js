import React from 'react'
import renderer from 'react-test-renderer'
import RangeSlider, { Slider } from '../src'

describe('pcln-slider', () => {
  test('RangeSlider renders', () => {
    const json = renderer.create(<RangeSlider />).toJSON()
    expect(json).toMatchSnapshot()
  })

  test('Slider renders', () => {
    const json = renderer.create(<Slider />).toJSON()
    expect(json).toMatchSnapshot()
  })
})
