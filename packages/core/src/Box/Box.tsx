import React, { type ComponentPropsWithRef } from 'react'
import styled from 'styled-components'
import {
  type BorderRadiusProps,
  type BoxShadowProps,
  type DisplayProps,
  type HeightProps,
  type MaxHeightProps,
  type MaxWidthProps,
  type MinHeightProps,
  type MinWidthProps,
  type OverflowProps,
  type ResponsiveValue,
  type SizeProps,
  type SpaceProps,
  type TextAlignProps,
  type WidthProps,
  borderRadius,
  boxShadow,
  compose,
  display,
  height,
  maxHeight,
  maxWidth,
  minHeight,
  minWidth,
  overflow,
  size,
  space,
  textAlign,
  width,
} from 'styled-system'
import type { BorderRadius, BoxShadowSize, ColorSchemeName } from '../theme/theme'
import { borderRadiusAttrs } from '../utils/attrs/borderRadiusAttrs'
import { boxShadowAttrs } from '../utils/attrs/boxShadowAttrs'
import { applyVariations, color, colorScheme } from '../utils/utils'

/**
 * @public
 */
export type BoxProps = Omit<BorderRadiusProps, 'borderRadius'> &
  BoxShadowProps &
  DisplayProps &
  HeightProps &
  MaxHeightProps &
  MaxWidthProps &
  MinHeightProps &
  MinWidthProps &
  OverflowProps &
  SizeProps &
  SpaceProps &
  TextAlignProps &
  WidthProps &
  ComponentPropsWithRef<'div'> & {
    children?: React.ReactNode
    as?: unknown
    role?: string
    bg?: string
    color?: string
    className?: string
    borderRadius?: ResponsiveValue<BorderRadius> | BorderRadiusProps['borderRadius']
    boxShadowSize?: ResponsiveValue<BoxShadowSize>
    boxShadowColor?:
      | 'primary'
      | 'secondary'
      | 'text'
      | 'highlight'
      | 'success'
      | 'error'
      | 'warning'
      | 'alert'
      | 'caution'
      | 'notify'
      | 'pricePrimary'
      | 'priceSecondary'
      | 'promoPrimary'
      | 'promoSecondary'
      | 'border'
      | 'background'
    colorScheme?: ColorSchemeName
    rounded?:
      | 'round'
      | 'top'
      | 'right'
      | 'bottom'
      | 'left'
      | 'topLeft'
      | 'topRight'
      | 'bottomRight'
      | 'bottomLeft'
  }

/**
 * @public
 * Use StyledBox for CSS selector interpolation (e.g., `& > ${StyledBox}`).
 * Use Box for component usage with ref forwarding.
 */
export const StyledBox = styled.div.attrs<BoxProps>((props) => ({
  ...borderRadiusAttrs(props),
  ...boxShadowAttrs(props),
}))<BoxProps>`
  ${applyVariations('Box')}
  ${color}
  ${colorScheme}

  ${(props) =>
    compose(
      width,
      display,
      height,
      maxHeight,
      maxWidth,
      minHeight,
      minWidth,
      size,
      space,
      textAlign,
      borderRadius,
      boxShadow,
      overflow
    )(props)}
`

/**
 * The fundamental layout primitive for spacing, sizing, and styling.
 *
 * A polymorphic container with styled-system props for margin, padding, width,
 * height, color, background, and more. Use as the base for custom components
 * or for quick layout adjustments. Supports `colorScheme` for themed palettes,
 * `boxShadowSize` for elevation, and `borderRadius` for rounded corners.
 *
 * @public
 */
export const Box = React.forwardRef<HTMLDivElement, BoxProps>((props, ref) => (
  <StyledBox ref={ref} {...props} />
))
Box.displayName = 'Box'
