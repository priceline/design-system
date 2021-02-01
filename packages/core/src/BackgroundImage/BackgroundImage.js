import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'
import { width, height } from 'styled-system'
import { applyVariations, getPaletteColor } from '../utils'

const variations = {
  parallax: css`
    background-attachment: fixed;
  `,
  static: css`
    background-attachment: scroll;
  `,
}

const image = (props) =>
  props.image ? { backgroundImage: `url(${props.image})` } : null

const BackgroundImage = styled.div`
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-color: ${getPaletteColor('border.light')};
  ${image} ${height} ${width};
  ${applyVariations('BackgroundImage', variations)}
`

BackgroundImage.defaultProps = {
  variation: 'static',
}

BackgroundImage.propTypes = {
  height: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.array
  ]),
  /** background-image url */
  image: PropTypes.string,
  variation: PropTypes.oneOf(Object.keys(variations)),
  width: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.array,
  ]),
}

BackgroundImage.displayName = 'BackgroundImage'

export default BackgroundImage
