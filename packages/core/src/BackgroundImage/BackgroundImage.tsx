import React from 'react'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'
import { width, height, borderRadius, WidthProps, HeightProps, BorderRadiusProps } from 'styled-system'
import propTypes from '@styled-system/prop-types'
import {
  getPaletteColor,
  borderRadiusAttrs,
  borderRadiusValues,
  applyVariations,
  roundedValues,
} from '../utils'

const variations = {
  parallax: css`
    background-attachment: fixed;
  `,
  static: css`
    background-attachment: scroll;
  `,
}

const image = (props) => (props.image ? { backgroundImage: `url(${props.image})` } : null)

const backgroundImagePropTypes = {
  ...propTypes.height,
  ...propTypes.width,
  ...propTypes.borderRadius,
  /** background-image url */
  image: PropTypes.string,
  variation: PropTypes.oneOf(Object.keys(variations)),
  borderRadiusSize: PropTypes.oneOf(borderRadiusValues),
  rounded: PropTypes.oneOf(roundedValues),
}

export interface IBackgroundImageProps
  extends WidthProps,
    HeightProps,
    BorderRadiusProps,
    Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'width' | 'height'> {
  variation?: 'parallax' | 'static'
  image?: string
  borderRadius?: string
  rounded?: string
}

const BackgroundImage: React.FC<IBackgroundImageProps> = styled.div.attrs(borderRadiusAttrs)`
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-color: ${getPaletteColor('border.light')};
  ${applyVariations('BackgroundImage', variations)}
  ${image} ${height} ${width} ${borderRadius};
`

BackgroundImage.propTypes = backgroundImagePropTypes

BackgroundImage.defaultProps = {
  variation: 'static',
}

BackgroundImage.displayName = 'BackgroundImage'

export default BackgroundImage
