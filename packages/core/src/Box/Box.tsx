import React from 'react'
import styled from 'styled-components'
import PropTypes, { InferProps } from 'prop-types'
import {
  borderRadius,
  display,
  height,
  maxHeight,
  maxWidth,
  minHeight,
  minWidth,
  boxShadow,
  size,
  space,
  textAlign,
  width,
} from 'styled-system'

import {
  borderRadiusAttrs,
  borderRadiusValues,
  boxShadowAttrs,
  boxShadowSizeValues,
  applyVariations,
  color,
  deprecatedColorValue,
  deprecatedPropType,
  paletteFamilies,
  roundedValues,
} from '../utils'

const propTypes = {
  ...borderRadius.propTypes,
  ...boxShadow.propTypes,
  ...display.propTypes,
  ...maxHeight.propTypes,
  ...maxWidth.propTypes,
  ...minHeight.propTypes,
  ...minWidth.propTypes,
  ...size.propTypes,
  ...space.propTypes,
  ...textAlign.propTypes,
  ...width.propTypes,
  bg: deprecatedPropType('color'),
  borderRadiusSize: PropTypes.oneOf(borderRadiusValues),
  rounded: PropTypes.oneOf(roundedValues),
  boxShadowSize: PropTypes.oneOf(boxShadowSizeValues),
  boxShadowColor: PropTypes.oneOf(paletteFamilies),
  color: deprecatedColorValue(),
}

const Box: React.FC<InferProps<typeof propTypes>> = styled.div.attrs((props) => ({
  ...borderRadiusAttrs(props),
  ...boxShadowAttrs(props),
}))`
  ${applyVariations('Box')}
  ${display} ${height} ${maxHeight} ${maxWidth}
  ${minHeight} ${minWidth} ${size} ${space} 
  ${textAlign} ${width} 
  ${color}

  ${borderRadius}
  ${boxShadow}
`

Box.displayName = 'Box'

Box.propTypes = propTypes

export default Box
