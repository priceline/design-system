import styled from 'styled-components'
import PropTypes from 'prop-types'
import { borderRadius } from 'styled-system'

import { Box } from '../Box'
import {
  applyVariations,
  getPaletteColor,
  deprecatedColorValue,
  boxShadow,
} from '../utils'

const boxBorder = ({ borderWidth, borderColor, ...props }) => ({
  border:
    borderWidth === 0
      ? '0'
      : `${borderWidth}px solid ${getPaletteColor(borderColor, 'base')(props)}`,
})

const Card = styled(Box)`
  ${boxShadow} ${boxBorder} ${borderRadius}
  ${applyVariations('Card')}
`

Card.propTypes = {
  ...borderRadius.propTypes,
  boxShadowSize: PropTypes.oneOf(['sm', 'md', 'lg', 'xl']),
  borderColor: deprecatedColorValue(),
  color: deprecatedColorValue(),
  borderWidth: PropTypes.oneOf([0, 1, 2]),
}

Card.defaultProps = {
  borderColor: 'border',
  borderRadius: 1,
  borderWidth: 1,
}

Card.displayName = 'Card'

export default Card
