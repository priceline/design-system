import styled from 'styled-components'
import PropTypes from 'prop-types'

const image = props => props.image
  ? { backgroundImage: `url(${props.image})` }
  : null

const BackgroundImage = styled.div`
  ${image}
  background-color: ${props => props.theme.colors.gray};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`

BackgroundImage.propTypes = {
  /** background-image url */
  image: PropTypes.string
}

export default BackgroundImage
