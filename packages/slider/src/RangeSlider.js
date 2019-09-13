import React from 'react'
import Range from './rc-slider/Range'
import { space, color } from 'styled-system'
import styleSlider from './styleSlider'

const RangeSlider = styleSlider(Range)

RangeSlider.defaultProps = {
  allowCross: false,
  color: 'blue'
}

RangeSlider.propTypes = {
  ...space.propTypes,
  ...color.propTypes
}

export default RangeSlider
