import React from 'react'
import styled from 'styled-components'
import { border, BorderProps } from 'styled-system'
import { Box, type BoxProps } from '../Box/Box'
import { borderRadiusAttrs } from '../utils/attrs/borderRadiusAttrs'
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

/**
 * @public
 */
const StyledCard = styled(Box).attrs<CardProps>((props) => ({
  ...borderRadiusAttrs(props),
}))<CardProps>`
  ${applyVariations('Card')}
  ${styleAsButton}

  border-color: ${(props) =>
    props.borderWidth === 0 ? '0' : getPaletteColor(props.borderColor, 'base')(props)};
  ${border};
`

/**
 * A container component for grouping related content with a border and optional shadow.
 *
 * Extends `Box` with default border styling. Use `boxShadowSize` for elevation levels
 * (sm, md, lg). Can be rendered as a button with `as="button"` for clickable cards
 * with hover effects. Supports all Box props plus border customization.
 *
 * @public
 */
export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  (
    { borderColor = 'border', borderRadius = 'xsm', borderStyle = 'solid', borderWidth = 1, ...props },
    ref
  ) => (
    <StyledCard
      ref={ref}
      borderColor={borderColor}
      borderRadius={borderRadius}
      borderStyle={borderStyle}
      borderWidth={borderWidth}
      {...props}
    />
  )
)
Card.displayName = 'Card'
