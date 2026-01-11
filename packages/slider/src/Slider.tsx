import propTypes from '@styled-system/prop-types'
import PropTypes from 'prop-types'
import React from 'react'
import RcSlider from 'rc-slider'
import styleSlider from './styleSlider'

const StyledSlider = styleSlider(RcSlider)

/**
 * A single-handle slider for selecting a value from a continuous range.
 *
 * Built on rc-slider with design system styling. Use `color` prop for semantic
 * colors (primary, secondary, alert, error). For range selection with two handles,
 * use `RangeSlider` instead. Supports accessibility labels via `ariaLabelForHandle`.
 */
const Slider = ({ color = 'primary', ...props }) => {
  return <StyledSlider color={color} {...props} />
}

Slider.propTypes = {
  ...propTypes.space,
  color: PropTypes.string,
}

export default Slider
