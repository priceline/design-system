import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'
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

const BackgroundImage = styled.div.attrs(borderRadiusAttrs)`
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-color: ${getPaletteColor('border.light')};
  ${applyVariations('BackgroundImage', variations)}
  ${image} ${height} ${width} ${borderRadius};
`

BackgroundImage.defaultProps = {
  variation: 'static',
}

BackgroundImage.propTypes = {
  ...height.propTypes,
  ...width.propTypes,
  ...borderRadius.propTypes,
  /** background-image url */
  image: PropTypes.string,
  variation: PropTypes.oneOf(Object.keys(variations)),
  borderRadiusSize: PropTypes.oneOf(borderRadiusValues),
  rounded: PropTypes.oneOf(roundedValues),
}

BackgroundImage.displayName = 'BackgroundImage'

export default BackgroundImage
