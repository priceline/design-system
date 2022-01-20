import React from 'react'
import styled from 'styled-components'
import PropTypes, { InferProps } from 'prop-types'

import { Box } from '../Box'
import { applyVariations, getPaletteColor, deprecatedColorValue } from '../utils'

const boxBorder = ({ borderWidth, borderColor, ...props }) => ({
  border: borderWidth === 0 ? '0' : `${borderWidth}px solid ${getPaletteColor(borderColor, 'base')(props)}`,
})

const propTypes = {
  borderColor: deprecatedColorValue(),
  color: deprecatedColorValue(),
  borderWidth: PropTypes.oneOf([0, 1, 2]),
}

const Card: React.FC<InferProps<typeof propTypes>> = styled(Box)`
  ${applyVariations('Card')}
  ${boxBorder}
`

Card.propTypes = propTypes

Card.defaultProps = {
  borderColor: 'border',
  borderRadius: 'xsm',
  borderWidth: 1,
}

Card.displayName = 'Card'

export default Card
