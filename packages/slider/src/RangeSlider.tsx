import type { SliderProps } from 'rc-slider'

import styledSystemPropTypes from '@styled-system/prop-types'
import PropTypes from 'prop-types'
import Range from 'rc-slider'
import styleSlider from './Slider.styled'

const _RangeSlider = styleSlider(Range)

const RangeSlider = (props: SliderProps) => {
  return <_RangeSlider {...props} />
}

RangeSlider.defaultProps = {
  allowCross: false,
  color: 'primary',
  range: true,
}

RangeSlider.propTypes = {
  ...styledSystemPropTypes.space,
  color: PropTypes.string,
}

export default RangeSlider
