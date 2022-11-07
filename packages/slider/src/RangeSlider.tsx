import React from 'react'
import PropTypes from 'prop-types'
import { space } from 'styled-system'

import Range from 'rc-slider'
import styleSlider from './styleSlider'

const _RangeSlider = styleSlider(Range)

const RangeSlider = (props) => {
  return <_RangeSlider {...props} />
}

RangeSlider.defaultProps = {
  allowCross: false,
  color: 'primary',
  range: true,
}

RangeSlider.propTypes = {
  ...space.propTypes,
  color: PropTypes.string,
}

export default RangeSlider
