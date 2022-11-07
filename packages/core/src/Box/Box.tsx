import React from 'react'
import styled from 'styled-components'
import PropTypes, { InferProps } from 'prop-types'
import {
  borderRadius,
  display,
  height,
  maxHeight,
  maxWidth,
  minHeight,
  minWidth,
  boxShadow,
  size,
  space,
  textAlign,
  width,
  BorderRadiusProps,
  BoxShadowProps,
  DisplayProps,
  MaxHeightProps,
  MaxWidthProps,
  MinHeightProps,
  HeightProps,
  MinWidthProps,
  SizeProps,
  SpaceProps,
  TextAlignProps,
  WidthProps,
} from 'styled-system'
import propTypes from '@styled-system/prop-types'

import {
  borderRadiusAttrs,
  borderRadiusValues,
  boxShadowAttrs,
  boxShadowSizeValues,
  applyVariations,
  color,
  deprecatedColorValue,
  paletteFamilies,
  roundedValues,
} from '../utils'

export const boxPropTypes = {
  ...propTypes.border,
  ...propTypes.boxShadow,
  ...propTypes.display,
  ...propTypes.maxHeight,
  ...propTypes.maxWidth,
  ...propTypes.minHeight,
  ...propTypes.minWidth,
  ...propTypes.height,
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
    MaxHeightProps,
    MaxWidthProps,
    MinHeightProps,
    MinWidthProps,
    HeightProps,
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
}

const Box: React.FC<InferProps<typeof boxPropTypes>> = styled.div.attrs((props) => ({
  ...borderRadiusAttrs(props),
  ...boxShadowAttrs(props),
}))`
  ${applyVariations('Box')}
  ${display} ${height} ${maxHeight} ${maxWidth}
  ${minHeight} ${minWidth} ${size} ${space} 
  ${textAlign} ${width} 
  ${color}

  ${borderRadius}
  ${boxShadow}
`

Box.displayName = 'Box'

Box.propTypes = boxPropTypes

export default Box
