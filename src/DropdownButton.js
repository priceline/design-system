import PropTypes from 'prop-types'
import { theme } from 'styled-system'
import OutlineButton from './OutlineButton'

const DropdownButton = OutlineButton.extend.attrs({
  id: props => props.id,
  'aria-haspopup': props => props.ariaHaspopup,
  'aria-controls': props => props.ariaControls,
  'aria-expanded': props =>
    props.ariaExpanded === 'true' || props.ariaExpanded === 'false'
      ? props.ariaExpanded
      : null
})`
  width: 100%;
  height: 100%;
  min-height: 44px;
  cursor: ${props => props.cursor};
  border-top-color: ${theme('colors.borderGray')};
  border-right-color: ${theme('colors.borderGray')};
  border-bottom-color: ${theme('colors.borderGray')};
  border-left-color: ${theme('colors.borderGray')};
  &:hover {
    border-color: ${theme('colors.blue')};
  }
`

DropdownButton.displayName = 'DropdownButton'

DropdownButton.propTypes = {
  id: PropTypes.string,
  ariaHaspopup: PropTypes.string,
  ariaControls: PropTypes.string,
  ariaExpanded: PropTypes.string,
  cursor: PropTypes.string
}

export default DropdownButton
