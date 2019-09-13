import React from 'react'
import RcSlider from './rc-slider/Slider'
import { space, color } from 'styled-system'
import styleSlider from './styleSlider'

const Slider = styleSlider(RcSlider)

Slider.defaultProps = {
  color: 'blue'
}

Slider.propTypes = {
  ...space.propTypes,
  ...color.propTypes
}

export default Slider
