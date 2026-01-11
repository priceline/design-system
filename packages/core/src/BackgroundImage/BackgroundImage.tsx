import React, {
  type ComponentPropsWithoutRef,
  type ForwardRefExoticComponent,
  type RefAttributes,
} from 'react'
import styled, { css } from 'styled-components'
import {
  BorderRadiusProps,
  HeightProps,
  WidthProps,
  borderRadius,
  compose,
  height,
  width,
} from 'styled-system'
import { applyVariations, getPaletteColor } from '../utils'
import { borderRadiusAttrs } from '../utils/attrs/borderRadiusAttrs'

const variations = {
  parallax: css`
    background-attachment: fixed;
  `,
  static: css`
    background-attachment: scroll;
  `,
}

/**
 * @public
 */
export const backgroundPositionList = ['top', 'bottom', 'left', 'right', 'center']
const image = (props) => (props.image ? { backgroundImage: `url(${props.image})` } : null)

/**
 * @public
 */
export type BackgroundImageProps = WidthProps &
  HeightProps &
  BorderRadiusProps &
  Omit<ComponentPropsWithoutRef<'img'>, 'width' | 'height'> & {
    variation?: 'parallax' | 'static'
    image?: string
    borderRadius?: string
    rounded?: string
    backgroundPosition?: (typeof backgroundPositionList)[number]
  }

/**
 * @public
 */
const StyledBackgroundImage = styled.div.attrs(borderRadiusAttrs)<BackgroundImageProps>`
  background-position: ${(props) => props.backgroundPosition};
  background-size: cover;
  background-repeat: no-repeat;
  background-color: ${getPaletteColor('border.light')};
  ${applyVariations('BackgroundImage', variations)}
  ${image} 
  ${(props) => compose(height, width, borderRadius)(props)}
`

/**
 * A container with a responsive background image and optional parallax effect.
 *
 * Renders a `div` with a cover-fit background image. Use `variation="parallax"` for
 * fixed attachment scrolling or `"static"` for normal scroll. Supports responsive
 * `width`/`height`, `borderRadius`, and custom `backgroundPosition`.
 *
 * @public
 */
export const BackgroundImage: ForwardRefExoticComponent<
  BackgroundImageProps & RefAttributes<HTMLDivElement>
> = React.forwardRef<HTMLDivElement, BackgroundImageProps>(
  ({ variation = 'static', backgroundPosition = 'center', ...props }, ref) => (
    <StyledBackgroundImage
      ref={ref}
      variation={variation}
      backgroundPosition={backgroundPosition}
      {...props}
    />
  )
)
BackgroundImage.displayName = 'BackgroundImage'
