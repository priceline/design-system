import React from 'react'
import PropTypes from 'prop-types'
import { space } from 'styled-system'
import { deprecatedPropType } from 'pcln-design-system'

import Range from 'rc-slider'
import styleSlider from './styleSlider'

const _RangeSlider = styleSlider(Range)

const RangeSlider = (props) => {
  return (
    <_RangeSlider
      {...{
        ariaLabelForHandle: props.ariaLabelGroupForHandles,
        ariaLabelledByForHandle: props.ariaLabelledByGroupForHandles,
        ariaValueTextFormatterForHandle: props.ariaValueTextFormatterGroupForHandles,
        ...props,
      }}
    />
  )
}

RangeSlider.defaultProps = {
  allowCross: false,
  color: 'primary',
  range: true,
}

RangeSlider.propTypes = {
  ...space.propTypes,
  color: PropTypes.string,
  ariaLabelGroupForHandles: deprecatedPropType('ariaLabelForHandle'),
  ariaLabelledByGroupForHandles: deprecatedPropType('ariaLabelledByForHandle'),
  ariaValueTextFormatterGroupForHandles: deprecatedPropType('ariaValueTextFormatterForHandle'),
}

export default RangeSlider
