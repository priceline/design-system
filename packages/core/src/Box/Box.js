import styled from 'styled-components'
import PropTypes from 'prop-types'
import {
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
  applyVariations,
  color,
  deprecatedColorValue,
  deprecatedPropType,
  boxShadow,
} from '../utils'

const Box = styled.div`
  ${display} ${height} ${maxHeight} ${maxWidth}
  ${minHeight} ${minWidth} ${size} ${space} 
  ${textAlign} ${width} 

  ${applyVariations('Box')}
  ${boxShadow}
  ${color}
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
