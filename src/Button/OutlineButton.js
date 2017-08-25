import styled from 'styled-components'
import PropTypes from 'prop-types'
import Button from './Button'

const OutlineButton = styled(Button)`
  background-color: ${props => props.theme.colors.white};
  color: ${props => props.color || props.theme.colors.blue};
  border-width: 2px;
  border-color: ${props => props.color || props.theme.colors.blue};

  &:hover {
    background-color: ${props =>  props.theme.colors.white};
  }
`

OutlineButton.propTypes = {
  color: PropTypes.string,
}

Button.displayName = 'OutlineButton'

export default OutlineButton
