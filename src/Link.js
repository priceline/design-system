import styled from 'styled-components'

const Link = styled.a`
  text-decoration: none;
  color: ${props => props.theme.colors.blue};
  &:hover {
    text-decoration: underline;
  }
`

Link.displayName = 'Link'

export default Link
