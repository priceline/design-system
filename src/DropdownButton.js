import PropTypes from 'prop-types'
import { theme } from 'styled-system'
import OutlineButton from './OutlineButton'

const DropdownButton = OutlineButton.extend.attrs({
  id: 'dropdownButton',
  type: 'button',
  'aria-haspopup': 'true',
  'aria-controls': 'dropdownMenu',
  'aria-expanded': props => (props.open ? 'true' : 'false')
})`
  cursor: pointer;
  width: 100%;
  height: 100%;
  min-height: 44px;
  border-color: ${theme('colors.borderGray')};
  &:hover {
    border-color: ${theme('colors.blue')};
  }
`

DropdownButton.displayName = 'DropdownButton'

DropdownButton.propTypes = {
  open: PropTypes.bool
}

DropdownButton.defaultProps = {
  open: false
}

export default DropdownButton
