import styled from 'styled-components'
import Box from './Box'
import theme from './theme'

const List = styled(Box)`
  color: ${props => props.theme.colors.black};
  background-color: ${props => props.theme.colors.white};
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5);
  div:last-child {
    border-bottom: none;
  }
`

List.defaultProps = {
  theme: theme
}

List.displayName = 'List'

export default List
