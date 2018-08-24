import styled from 'styled-components'
import theme from './theme'

const Image = styled.img`
  display: block;
  max-width: 100%;
  height: auto;
`

Image.displayName = 'Image'

Image.defaultProps = {
  theme: theme
}

export default Image
