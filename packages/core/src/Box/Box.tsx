import React from 'react'
import styled from 'styled-components'
import PropTypes, { InferProps } from 'prop-types'
import {
  borderRadius,
  boxShadow,
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
  compose,
} from 'styled-system'
import propTypes from '@styled-system/prop-types'

import {
  applyVariations,
  borderRadiusAttrs,
  borderRadiusValues,
  boxShadowAttrs,
  boxShadowSizeValues,
  color,
  colorScheme,
  deprecatedColorValue,
  paletteFamilies,
  roundedValues,
} from '../utils'
import { ColorSchemes } from '../theme'

export const boxPropTypes = {
  ...propTypes.boxShadow,
  ...propTypes.display,
  ...propTypes.height,
  ...propTypes.maxHeight,
  ...propTypes.maxWidth,
  ...propTypes.minHeight,
  ...propTypes.minWidth,
  ...propTypes.overflow,
  ...propTypes.size,
  ...propTypes.space,
  ...propTypes.textAlign,
  ...propTypes.width,
  bg: deprecatedColorValue(),
  borderRadiusSize: PropTypes.oneOf(borderRadiusValues),
  rounded: PropTypes.oneOf(roundedValues),
  boxShadowSize: PropTypes.oneOf(boxShadowSizeValues),
  boxShadowColor: PropTypes.oneOf(paletteFamilies),
  color: deprecatedColorValue(),
}

export interface IBoxProps
  extends BorderRadiusProps,
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
    React.HTMLAttributes<HTMLDivElement> {
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
  rounded?: 'top' | 'right' | 'bottom' | 'left' | 'topLeft' | 'topRight' | 'bottomRight' | 'bottomLeft'
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
  onClick?: (unknown) => unknown
  colorScheme?: keyof ColorSchemes
}

const Box: React.FC<InferProps<typeof boxPropTypes>> = styled.div.attrs((props) => ({
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

Box.propTypes = boxPropTypes

export default Box
