import styled from 'styled-components'

const Link = styled.a`
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`

Link.displayName = 'Link'

export default Link
