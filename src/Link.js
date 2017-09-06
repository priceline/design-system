import styled from 'styled-components'
import { colors } from './theme'

const Link = styled.a`
  text-decoration: none;
  color: ${colors['blue']};
  &:hover {
    text-decoration: underline;
  }
`

Link.displayName = 'Link'

export default Link
