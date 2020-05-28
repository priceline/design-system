import PropTypes from 'prop-types'
import { space } from 'styled-system'

import Range from './rc-slider/Range'
import styleSlider from './styleSlider'

const RangeSlider = styleSlider(Range)

RangeSlider.defaultProps = {
  allowCross: false,
  color: 'primary',
}

RangeSlider.propTypes = {
  ...space.propTypes,
  color: PropTypes.string,
}

export default RangeSlider
