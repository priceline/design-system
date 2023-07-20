import styledSystemPropTypes from '@styled-system/prop-types'
import PropTypes from 'prop-types'
import RcSlider from 'rc-slider'
import createStyledSlider from './Slider.styled'

const Slider = createStyledSlider(RcSlider)

Slider.defaultProps = {
  color: 'primary',
}

Slider.propTypes = {
  ...styledSystemPropTypes.space,
  color: PropTypes.string,
}

export default Slider
