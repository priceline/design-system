import React, { type ComponentPropsWithRef } from 'react'
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
  Omit<ComponentPropsWithRef<'img'>, 'width' | 'height'> & {
    borderRadiusSize?: string
    rounded?: string
    boxShadowSize?: string
    boxShadowColor?: string
    objectFit?: ObjectFit
    objectPosition?: ObjectPosition
  }

const StyledImage = styled.img.attrs<ImageProps>((props) => ({
  ...borderRadiusAttrs(props),
  ...boxShadowAttrs(props),
}))<ImageProps>`
  display: block;
  ${objectFit};
  ${objectPosition};

  ${(props) =>
    compose(width, height, maxHeight, maxWidth, minHeight, minWidth, space, borderRadius, boxShadow)(props)}
`

/**
 * A styled image component with support for rounded corners and box shadows.
 *
 * Extends the native `<img>` element with design system props for `borderRadius`,
 * `boxShadowSize`, `rounded` corners, and responsive `width`/`height`. Use `objectFit`
 * and `objectPosition` for image cropping behavior.
 *
 * @public
 */
export const Image = React.forwardRef<HTMLImageElement, ImageProps>(
  ({ boxShadowColor = 'border', maxWidth = '100%', ...props }, ref) => (
    <StyledImage ref={ref} boxShadowColor={boxShadowColor} maxWidth={maxWidth} {...props} />
  )
)
Image.displayName = 'Image'
