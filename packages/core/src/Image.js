import styled from 'styled-components'

const Image = styled.img.attrs(props => ({
  height: props.height || 'auto'
}))`
  display: block;
  max-width: 100%;
`

Image.displayName = 'Image'

export default Image
