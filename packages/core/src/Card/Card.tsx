import styled from 'styled-components'
import { borderRadius, BorderRadiusProps } from 'styled-system'

import { Box, BoxProps } from '../Box'
import {
  applyVariations,
  getPaletteColor,
  deprecatedColorValue,
} from '../utils'

const boxBorder = ({ borderWidth, borderColor, ...props }: CardProps) => ({
  border:
    borderWidth === 0
      ? '0'
      : `${borderWidth}px solid ${getPaletteColor(borderColor, 'base')(props)}`,
})

interface CardProps extends BoxProps, BorderRadiusProps {
  borderWidth?: 0 | 1 | 2
  color?: string
  borderColor?: string
}

export const Card = styled(Box)<CardProps>`
  ${boxBorder} ${borderRadius}
  ${applyVariations('Card')}
` as React.FunctionComponent<CardProps>

Card.propTypes = {
  borderColor: deprecatedColorValue(),
  color: deprecatedColorValue(),
}

Card.defaultProps = {
  borderColor: 'border',
  borderRadius: 1,
  borderWidth: 1,
}

Card.displayName = 'Card'

export default Card
