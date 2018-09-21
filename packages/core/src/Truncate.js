import styled from 'styled-components'
import Text from './Text'
import theme from './theme'

const Truncate = styled(Text)`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`
Truncate.defaultProps = {
  theme: theme
}

Truncate.displayName = 'Truncate'

export default Truncate
