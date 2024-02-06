import React from 'react'
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
import { borderRadiusAttrs } from '../utils/attrs/borderRadiusAttrs'
import { applyVariations, getPaletteColor } from '../utils/utils'

const variations = {
  parallax: css`
    background-attachment: fixed;
  `,
  static: css`
    background-attachment: scroll;
  `,
}

export const backgroundPositionList = ['top', 'bottom', 'left', 'right', 'center']
const image = (props) => (props.image ? { backgroundImage: `url(${props.image})` } : null)

export type BackgroundImageProps = WidthProps &
  HeightProps &
  BorderRadiusProps &
  Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'width' | 'height'> & {
    variation?: 'parallax' | 'static'
    image?: string
    borderRadius?: string
    rounded?: string
    backgroundPosition?: (typeof backgroundPositionList)[number]
  }

export const BackgroundImage: React.FC<BackgroundImageProps> = styled.div.attrs(borderRadiusAttrs)`
  background-position: ${(props) => props.backgroundPosition};
  background-size: cover;
  background-repeat: no-repeat;
  background-color: ${getPaletteColor('border.light')};
  ${applyVariations('BackgroundImage', variations)}
  ${image} 

  ${(props) => compose(height, width, borderRadius)(props)}
`

BackgroundImage.defaultProps = {
  variation: 'static',
  backgroundPosition: 'center',
}

BackgroundImage.displayName = 'BackgroundImage'
