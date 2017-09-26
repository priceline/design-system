import styled from 'styled-components'
import PropTypes from 'prop-types'

import {
  detectWebPSupport
} from './helpers'

const image = props => {
  /* istanbul ignore next */
  const isWebP = props.useWebP && detectWebPSupport()
  /* istanbul ignore next */
  const finalImage = isWebP
    ? props.imageWebP : props.image

  return finalImage
    ? { backgroundImage: `url(${finalImage})` }
    : null
}

const height = props => props.height
  ? { height: props.height }
  : null

const BackgroundImage = styled.div`
  ${image}
  ${height}
  background-color: ${props => props.theme.colors.gray};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`
BackgroundImage.displayName = 'BackgroundImage'

BackgroundImage.propTypes = {
  /** background-image url */
  image: PropTypes.string,
  imageWebP: PropTypes.string,
  useWebP: PropTypes.bool
}

BackgroundImage.defaultProps = {
  useWebP: false
}

export default BackgroundImage
