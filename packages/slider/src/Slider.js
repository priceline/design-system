import PropTypes from 'prop-types'
import { space } from 'styled-system'

import RcSlider from './rc-slider/Slider'
import styleSlider from './styleSlider'

const Slider = styleSlider(RcSlider)

Slider.defaultProps = {
  color: 'primary',
}

Slider.propTypes = {
  ...space.propTypes,
  color: PropTypes.string,
}

export default Slider
