import propTypes from '@styled-system/prop-types'
import PropTypes from 'prop-types'
import RcSlider from 'rc-slider'
import React from 'react'
import styleSlider from './styleSlider'

const _Slider = styleSlider(RcSlider)

const Slider = ({ color = 'primary', ...props }) => <_Slider color={color} {...props} />

Slider.propTypes = {
  ...propTypes.space,
  color: PropTypes.string,
}

export default Slider
