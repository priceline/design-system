import styled from 'styled-components'
import PropTypes from 'prop-types'
import { color } from 'styled-system'
import Button from './Button'
import theme from './theme'
import { darken } from 'polished'

const OutlineButton = styled(Button)`
  color: ${props => props.theme.colors.primary};
  box-shadow: inset 0 0 0 2px ${props => props.theme.colors.primary};
  background-color: transparent;

  &:hover {
    color: ${props =>
      props.disabled ? null : darken(0.075, props.theme.colors.primary)};
    box-shadow: inset 0 0 0 2px
      ${props =>
        props.disabled ? null : darken(0.075, props.theme.colors.primary)};
    background-color: transparent;
  }
`

OutlineButton.defaultProps = {
  theme: theme
}

OutlineButton.displayName = 'OutlineButton'

export default OutlineButton
