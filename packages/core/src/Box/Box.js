import styled from 'styled-components'
import PropTypes from 'prop-types'
import { space, width, textAlign } from 'styled-system'

import {
  applyVariations,
  color,
  deprecatedColorValue,
  deprecatedPropType,
  boxShadow,
} from '../utils'

const Box = styled.div`
  ${space} ${width} ${textAlign} ${boxShadow}
  ${color}
  ${applyVariations('Box')}
`

Box.displayName = 'Box'

Box.propTypes = {
  ...space.propTypes,
  ...width.propTypes,
  color: deprecatedColorValue(),
  bg: deprecatedPropType('color'),
  ...textAlign.propTypes,
  boxShadowSize: PropTypes.oneOf(['sm', 'md', 'lg', 'xl']),
}

export default Box
