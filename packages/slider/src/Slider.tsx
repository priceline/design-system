import propTypes from '@styled-system/prop-types'
import PropTypes from 'prop-types'
import RcSlider from 'rc-slider'
import styleSlider from './styleSlider'

const Slider = styleSlider(RcSlider)

Slider.propTypes = {
  ...propTypes.space,
  color: PropTypes.string,
}

Slider.defaultProps = {
  color: 'primary',
}

export default Slider
