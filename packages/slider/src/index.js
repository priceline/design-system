import React from 'react'
import {
  Slider as CompoundSlider,
  Handles,
  Tracks
} from 'react-compound-slider'
import styled from 'styled-components'

export const Slider = ({ value, min, max, ...props }) => (
  <CompoundSlider values={value} min={min} max={max} {...props}>
    <Handles children={() => 'hi'} />
  </CompoundSlider>
)

Slider.defaultProps = {}

export default Slider
