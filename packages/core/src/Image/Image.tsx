import React, { type ComponentPropsWithoutRef } from 'react'
import styled from 'styled-components'
import {
  BorderRadiusProps,
  BoxShadowProps,
  HeightProps,
  MaxHeightProps,
  MaxWidthProps,
  MinHeightProps,
  MinWidthProps,
  SpaceProps,
  WidthProps,
  borderRadius,
  boxShadow,
  compose,
  height,
  maxHeight,
  maxWidth,
  minHeight,
  minWidth,
  space,
  width,
} from 'styled-system'
import {
  ObjectFit,
  ObjectPosition,
  borderRadiusAttrs,
  boxShadowAttrs,
  objectFit,
  objectPosition,
} from '../utils'

/**
 * @public
 */
export type ImageProps = BorderRadiusProps &
  BoxShadowProps &
  HeightProps &
  MaxHeightProps &
  MaxWidthProps &
  MinHeightProps &
  MinWidthProps &
  SpaceProps &
  WidthProps &
  Omit<ComponentPropsWithoutRef<'img'>, 'width' | 'height'> & {
    borderRadiusSize?: string
    rounded?: string
    boxShadowSize?: string
    boxShadowColor?: string
    objectFit?: ObjectFit
    objectPosition?: ObjectPosition
  }

const _Image: React.FC<ImageProps> = styled.img.attrs((props) => ({
  ...borderRadiusAttrs(props),
  ...boxShadowAttrs(props),
}))`
  display: block;
  ${objectFit};
  ${objectPosition};

  ${(props) =>
    compose(width, height, maxHeight, maxWidth, minHeight, minWidth, space, borderRadius, boxShadow)(props)}
`

/**
 * @public
 */
export const Image: React.FC<ImageProps> = ({ boxShadowColor = 'border', maxWidth = '100%', ...props }) => (
  <_Image boxShadowColor={boxShadowColor} maxWidth={maxWidth} {...props} />
)

Image.displayName = 'Image'
