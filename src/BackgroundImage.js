import styled from 'styled-components'
import PropTypes from 'prop-types'

const image = props =>
  props.image ? { backgroundImage: `url(${props.image})` } : null

const height = props => (props.height ? { height: props.height } : null)

const BackgroundImage = styled.div`
  ${image} ${height} background-color: ${props => props.theme.colors.gray};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`

BackgroundImage.propTypes = {
  /** background-image url */
  image: PropTypes.string
}

export default BackgroundImage
