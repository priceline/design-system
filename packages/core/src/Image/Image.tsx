import React from 'react'
import styled from 'styled-components'
import {
  BorderRadiusProps,
  BoxShadowProps,
  HeightProps,
  SpaceProps,
  WidthProps,
  borderRadius,
  boxShadow,
  height,
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

export type ImageProps = BorderRadiusProps &
  BoxShadowProps &
  HeightProps &
  SpaceProps &
  WidthProps &
  Partial<Omit<HTMLImageElement, 'width' | 'height'>> & {
    borderRadiusSize?: string
    rounded?: string
    boxShadowSize?: string
    boxShadowColor?: string
    objectFit?: ObjectFit
    objectPosition?: ObjectPosition
  }

export const Image: React.FC<ImageProps> = styled.img.attrs((props) => ({
  ...borderRadiusAttrs(props),
  ...boxShadowAttrs(props),
}))`
  display: block;
  max-width: 100%;
  ${height};
  ${space};
  ${width};

  ${borderRadius}
  ${boxShadow}
  ${objectFit}
  ${objectPosition}
`

Image.displayName = 'Image'

Image.defaultProps = {
  boxShadowColor: 'border',
}
