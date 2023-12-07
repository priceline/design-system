import React, { MutableRefObject } from 'react'
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

import type { ColorSchemeName } from '../theme'
import { applyVariations, borderRadiusAttrs, boxShadowAttrs, color, colorScheme } from '../utils'

export type BoxProps = BorderRadiusProps &
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
  React.HTMLAttributes<HTMLDivElement> & {
    children?: React.ReactNode | string
    as?: React.ReactNode
    role?: string
    bg?: string
    color?: string
    className?: string
    borderRadiusSize?:
      | 'none'
      | 'xsm'
      | 'sm'
      | 'md'
      | 'lg'
      | 'xl'
      | '2xl'
      | '3xl'
      | 'full'
      | 'action-sm'
      | 'action-md'
      | 'action-lg'
    boxShadowSize?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'overlay-lg' | 'overlay-xl'
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
    onClick?: (unknown) => unknown
    ref?: MutableRefObject<HTMLDivElement>
    rounded?: 'top' | 'right' | 'bottom' | 'left' | 'topLeft' | 'topRight' | 'bottomRight' | 'bottomLeft'
  }

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
