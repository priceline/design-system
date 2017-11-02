import styled from 'styled-components'
import Button from './Button'

const RedButton = styled(Button)`
  background-color: ${props => props.theme.colors.red};

  &:hover {
    background-color: ${props =>
      props.disabled ? null : props.theme.colors.darkRed};
  }
`

export default RedButton
