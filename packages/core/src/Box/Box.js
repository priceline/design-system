import styled from 'styled-components'
import PropTypes from 'prop-types'
import {
  borderRadius,
  display,
  height,
  maxHeight,
  maxWidth,
  minHeight,
  minWidth,
  size,
  space,
  textAlign,
  width,
} from 'styled-system'

import {
  borderRadiusAttrs,
  applyVariations,
  color,
  deprecatedColorValue,
  deprecatedPropType,
  boxShadow,
} from '../utils'

const Box = styled.div.attrs(borderRadiusAttrs)`
  ${applyVariations('Box')}
  ${display} ${height} ${maxHeight} ${maxWidth}
  ${minHeight} ${minWidth} ${size} ${space} 
  ${textAlign} ${width} 
  ${boxShadow}
  ${color}

  ${borderRadius}
`

Box.displayName = 'Box'

Box.propTypes = {
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
  boxShadowSize: PropTypes.oneOf(['sm', 'md', 'lg', 'xl']),
  color: deprecatedColorValue(),
}

export default Box
