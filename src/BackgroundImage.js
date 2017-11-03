import styled from 'styled-components'
import PropTypes from 'prop-types'
import { width, propTypes } from 'styled-system'

const image = props =>
  props.image ? { backgroundImage: `url(${props.image})` } : null

const height = props => (props.height ? { height: props.height } : null)

const BackgroundImage = styled.div`
  background-color: ${props => props.theme.colors.gray};
  ${image} ${height} ${width} background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`

BackgroundImage.propTypes = {
  /** background-image url */
  image: PropTypes.string,
  ...propTypes.width
}

export default BackgroundImage
