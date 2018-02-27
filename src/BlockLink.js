import styled from 'styled-components'
import Link from './Link'

const BlockLink = styled(Link)`
  display: block;
  color: inherit;
  text-decoration: inherit;
  &:hover {
    text-decoration: inherit;
  }
`

BlockLink.displayName = 'BlockLink'

export default BlockLink
