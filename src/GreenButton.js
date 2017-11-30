import styled from 'styled-components'
import Button from './Button'
import theme from './theme'

const GreenButton = styled(Button)`
  background-color: ${props => props.theme.colors.green};

  &:hover {
    background-color: ${props =>
      props.disabled ? null : props.theme.colors.darkGreen};
  }
`

GreenButton.defaultProps = {
  theme: theme
}

GreenButton.displayName = 'GreenButton'

export default GreenButton
