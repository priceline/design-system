import styled from 'styled-components'
import Button from './Button'

const RedButton = styled(Button)`
  background-color: ${props => props.theme.colors.red};

  &:hover {
    background-color: ${props => props.theme.colors.red1};
  }
`
export default RedButton
