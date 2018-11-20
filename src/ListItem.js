import styled from 'styled-components'
import Flex from './Flex'
import theme from './theme'

const ListItem = styled(Flex)`
  color: ${props => props.theme.colors.black};
  background-color: ${props => props.theme.colors.white};
  border-bottom: 1px solid ${props => props.theme.colors.gray300};
  width: 100%;
  justify-content: flex-start;
`

ListItem.defaultProps = {
  theme: theme
}

ListItem.displayName = 'ListItem'

export default ListItem
