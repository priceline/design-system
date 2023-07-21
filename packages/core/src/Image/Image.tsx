import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import {
  width,
  height,
  space,
  borderRadius,
  boxShadow,
  BorderRadiusProps,
  BoxShadowProps,
  HeightProps,
  SpaceProps,
  WidthProps,
} from 'styled-system'
import propTypes from '@styled-system/prop-types'
import {
  borderRadiusAttrs,
  borderRadiusValues,
  boxShadowAttrs,
  boxShadowSizeValues,
  paletteFamilies,
  roundedValues,
  ObjectFit,
  ObjectPosition,
  objectFitValues,
  objectPositionValues,
  objectFit,
  objectPosition,
} from '../utils'

const imagePropTypes = {
  ...propTypes.borderRadius,
  ...propTypes.boxShadow,
  ...propTypes.height,
  ...propTypes.space,
  ...propTypes.width,
  borderRadiusSize: PropTypes.oneOf(borderRadiusValues),
  rounded: PropTypes.oneOf(roundedValues),
  boxShadowSize: PropTypes.oneOf(boxShadowSizeValues),
  boxShadowColor: PropTypes.oneOf(paletteFamilies),
  objectFit: PropTypes.oneOf(objectFitValues),
  objectPosition: PropTypes.oneOf(objectPositionValues),
}

export interface IImageProps
  extends BorderRadiusProps,
    BoxShadowProps,
    HeightProps,
    SpaceProps,
    WidthProps,
    Partial<Omit<HTMLImageElement, 'width' | 'height'>> {
  borderRadiusSize?: string
  rounded?: string
  boxShadowSize?: string
  boxShadowColor?: string
  objectFit?: ObjectFit
  objectPosition?: ObjectPosition
}

const Image: React.FC<IImageProps> = styled.img.attrs((props) => ({
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

Image.propTypes = imagePropTypes

Image.defaultProps = {
  boxShadowColor: 'border',
}

export default Image
