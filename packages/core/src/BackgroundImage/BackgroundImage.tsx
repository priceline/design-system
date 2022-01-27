import React from 'react'
import styled, { css } from 'styled-components'
import PropTypes, { InferProps } from 'prop-types'
import { width, height, borderRadius } from 'styled-system'
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

const propTypes = {
  ...height.propTypes,
  ...width.propTypes,
  ...borderRadius.propTypes,
  /** background-image url */
  image: PropTypes.string,
  variation: PropTypes.oneOf(Object.keys(variations)),
  borderRadiusSize: PropTypes.oneOf(borderRadiusValues),
  rounded: PropTypes.oneOf(roundedValues),
}

const BackgroundImage: React.FC<InferProps<typeof propTypes>> = styled.div.attrs(borderRadiusAttrs)`
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-color: ${getPaletteColor('border.light')};
  ${applyVariations('BackgroundImage', variations)}
  ${image} ${height} ${width} ${borderRadius};
`

BackgroundImage.propTypes = propTypes

BackgroundImage.defaultProps = {
  variation: 'static',
}

BackgroundImage.displayName = 'BackgroundImage'

export default BackgroundImage
