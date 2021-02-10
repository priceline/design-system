import styled from 'styled-components'
import { width, height, space } from 'styled-system'

const Image = styled.img`
  display: block;
  max-width: 100%;
  ${height};
  ${space};
  ${width};
`

Image.displayName = 'Image'

Image.propTypes = {
  ...height.propTypes,
  ...space.propTypes,
  ...width.propTypes,
}

export default Image
