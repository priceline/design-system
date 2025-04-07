import propTypes from '@styled-system/prop-types'
import PropTypes from 'prop-types'
import React from 'react'

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
  ...propTypes.space,
  color: PropTypes.string,
}

export default RangeSlider
