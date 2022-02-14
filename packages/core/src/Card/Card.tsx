import React from 'react'
import styled from 'styled-components'
import { borderRadius, boxShadow } from 'styled-system'
import PropTypes, { InferProps } from 'prop-types'

import { Box } from '../Box'
import {
  borderRadiusAttrs,
  borderRadiusValues,
  boxShadowAttrs,
  boxShadowSizeValues,
  applyVariations,
  deprecatedColorValue,
  paletteFamilies,
  roundedValues,
  getPaletteColor,
} from '../utils'

const boxBorder = ({ borderWidth, borderColor, ...props }) => ({
  border: borderWidth === 0 ? '0' : `${borderWidth}px solid ${getPaletteColor(borderColor, 'base')(props)}`,
})

const propTypes = {
  borderColor: deprecatedColorValue(),
  color: deprecatedColorValue(),
  borderWidth: PropTypes.oneOf([0, 1, 2]),
  borderRadiusSize: PropTypes.oneOf(borderRadiusValues),
  rounded: PropTypes.oneOf(roundedValues),
  boxShadowSize: PropTypes.oneOf(boxShadowSizeValues),
  boxShadowColor: PropTypes.oneOf(paletteFamilies),
}

const Card: React.FC<InferProps<typeof propTypes>> = styled(Box).attrs((props) => ({
  ...borderRadiusAttrs(props),
  ...boxShadowAttrs(props),
}))`
  ${applyVariations('Card')}
  ${boxBorder}
  ${borderRadius}
  ${boxShadow}
`

Card.propTypes = propTypes

Card.defaultProps = {
  borderColor: 'border',
  borderRadius: 'xsm',
  borderWidth: 1,
}

Card.displayName = 'Card'

export default Card
