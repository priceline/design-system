import styled from 'styled-components'

const Link = styled.a`
  text-decoration: none;
  ${props => props.theme ? `color: ${props.theme.colors.blue};` : null}
  &:hover {
    text-decoration: underline;
  }
`

Link.displayName = 'Link'

export default Link
