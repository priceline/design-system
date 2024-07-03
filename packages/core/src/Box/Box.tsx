import React from 'react'
import styled from 'styled-components'
import {
  BorderRadiusProps,
  BoxShadowProps,
  DisplayProps,
  HeightProps,
  MaxHeightProps,
  MaxWidthProps,
  MinHeightProps,
  MinWidthProps,
  OverflowProps,
  type ResponsiveValue,
  SizeProps,
  SpaceProps,
  TextAlignProps,
  WidthProps,
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
  React.ComponentPropsWithRef<'div'> & {
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
    onClick?: React.ComponentProps<'div'>['onClick']
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
 */
export const Box: React.FC<BoxProps> = styled.div.attrs((props) => ({
  ...borderRadiusAttrs(props),
  ...boxShadowAttrs(props),
}))`
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

Box.displayName = 'Box'
