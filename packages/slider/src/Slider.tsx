import propTypes from '@styled-system/prop-types'
import PropTypes from 'prop-types'

import RcSlider from 'rc-slider'
import styleSlider from './styleSlider'

const Slider = styleSlider(RcSlider).attrs(() => ({
  color: 'primary',
}))

Slider.propTypes = {
  ...propTypes.space,
  color: PropTypes.string,
}

export default Slider
