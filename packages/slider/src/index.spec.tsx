import React from 'react'
import { render } from './__test__/testing-library'

import RangeSlider, { Slider } from '.'

describe('pcln-slider', () => {
  test('RangeSlider', () => {
    const { asFragment } = render(<RangeSlider />)
    expect(asFragment()).toMatchSnapshot()
  })

  test('Slider', () => {
    const { asFragment } = render(<Slider />)
    expect(asFragment()).toMatchSnapshot()
  })
})
