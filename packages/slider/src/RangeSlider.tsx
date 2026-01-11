import propTypes from '@styled-system/prop-types'
import PropTypes from 'prop-types'
import React from 'react'

import Range from 'rc-slider'
import styleSlider from './styleSlider'

const StyledRangeSlider = styleSlider(Range)

/**
 * A dual-handle slider for selecting a value range (min/max).
 *
 * Built on rc-slider with design system styling. Pass `value` as an array
 * of two or more numbers. Use `color` prop for semantic colors and
 * `ariaLabelForHandle` array for accessibility. Handles cannot cross by default.
 */
const RangeSlider = ({ allowCross = false, color = 'primary', range = true, ...props }) => {
  return <StyledRangeSlider allowCross={allowCross} color={color} range={range} {...props} />
}

RangeSlider.propTypes = {
  ...propTypes.space,
  color: PropTypes.string,
}

export default RangeSlider
