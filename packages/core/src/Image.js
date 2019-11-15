import styled from 'styled-components'
import { width } from 'styled-system'

const Image = styled.img.attrs(props => ({
  height: props.height || 'auto'
}))`
  display: block;
  max-width: 100%;
  ${width}
`

Image.displayName = 'Image'

export default Image
