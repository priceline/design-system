import React from 'react'
import PropTypes from 'prop-types'
import RcSlider from './rc-slider/Slider'
import { space } from 'styled-system'
import styleSlider from './styleSlider'

const Slider = styleSlider(RcSlider)

Slider.defaultProps = {
  color: 'primary'
}

Slider.propTypes = {
  ...space.propTypes,
  color: PropTypes.string
}

export default Slider
