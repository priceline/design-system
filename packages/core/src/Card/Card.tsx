import React from 'react'
import styled from 'styled-components'
import { border, BorderProps } from 'styled-system'
import { Box, type BoxProps } from '../Box/Box'
import { applyVariations, getPaletteColor } from '../utils/utils'

const styleAsButton = ({ as, ...props }) =>
  as === 'button'
    ? `
      font-family : inherit;
      &:hover {
        cursor: pointer;
        box-shadow: ${props.theme.shadows.xl};
      }`
    : ''

/**
 * @public
 */
export type CardProps = BoxProps &
  BorderProps & {
    borderColor?: string
  }

const _Card: React.FC<CardProps> = styled(Box)`
  ${applyVariations('Card')}
  ${styleAsButton}

  border-color: ${(props) =>
    props.borderWidth === 0 ? '0' : getPaletteColor(props.borderColor, 'base')(props)};
  ${border};
`

/**
 * @public
 */
export const Card: React.FC<CardProps> = ({
  borderColor = 'border',
  borderRadius = 'xsm',
  borderStyle = 'solid',
  borderWidth = 1,
  ...props
}) => (
  <_Card
    borderColor={borderColor}
    borderRadius={borderRadius}
    borderStyle={borderStyle}
    borderWidth={borderWidth}
    {...props}
  />
)

Card.displayName = 'Card'
