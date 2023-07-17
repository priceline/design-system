import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { Box, IBoxProps } from '../Box'
import { applyVariations, getPaletteColor, deprecatedColorValue } from '../utils'

const boxBorder = ({ borderWidth, borderColor, ...props }) => ({
  borderWidth: borderWidth === 0 ? '0' : `${borderWidth}px`,
  borderStyle: borderWidth === 0 ? undefined : 'solid',
  borderColor: borderWidth === 0 ? '0' : getPaletteColor(borderColor, 'base')(props),
})

const styleAsButton = ({ as, ...props }) =>
  as === 'button'
    ? `
      font-family : inherit;
      &:hover {
        cursor: pointer;
        box-shadow: ${props.theme.shadows.xl};
      }`
    : ''

const cardPropTypes = {
  borderColor: deprecatedColorValue(),
  color: deprecatedColorValue(),
  borderWidth: PropTypes.oneOf([0, 1, 2]),
}

export interface ICardProps extends IBoxProps {
  borderWidth?: 0 | 1 | 2 | string
  borderColor?: string
}

const Card: React.FC<ICardProps> = styled(Box)`
  ${applyVariations('Card')}
  ${boxBorder}
  ${styleAsButton}
`

Card.propTypes = cardPropTypes

Card.defaultProps = {
  borderColor: 'border',
  borderRadius: 'xsm',
  borderWidth: 1,
}

Card.displayName = 'Card'

export default Card
