import styled from 'styled-components'
import PropTypes from 'prop-types'
import { width } from 'styled-system'

const image = props =>
  props.image ? { backgroundImage: `url(${props.image})` } : null

const height = props => (props.height ? { height: props.height } : null)

const BackgroundImage = styled.div`
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-color: ${props => props.theme.colors.gray};
  ${image} ${height} ${width};
`
const numberStringOrArray = PropTypes.oneOfType([
  PropTypes.number,
  PropTypes.string,
  PropTypes.array
])

BackgroundImage.propTypes = {
  /** background-image url */
  image: PropTypes.string,
  width: numberStringOrArray
}

export default BackgroundImage
