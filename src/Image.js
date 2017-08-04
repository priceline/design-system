import styled from 'styled-components'
import { space, width, color } from 'styled-system'
import PropTypes from 'prop-types'

const Image = styled.img`
  display: block;
  max-width: 100%;
  height: auto;
`

Image.displayName = 'Image'

Image.propTypes = {
  src: PropTypes.string.isRequired,
  width: PropTypes.string
}

export default Image
