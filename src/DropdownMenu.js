import { width } from 'styled-system'
import { Card } from './index'
import PropTypes from 'prop-types'

const CardUL = Card.withComponent('ul')

const DropdownMenu = CardUL.extend.attrs({
  id: 'dropdownMenu',
  role: 'menu',
  tabIndex: 0,
  'aria-labelledby': 'dropdownButton',
  'aria-activedescendant': props => `mi${props.activeDescendantIndex}`
})`
  height: 200px;
  -moz-padding-start: 0;
  -webkit-padding-start: 0;
  overflow: scroll;
  -webkit-overflow-scrolling: scroll;

  ${width}
`

DropdownMenu.displayName = 'DropdownMenu'

DropdownMenu.propTypes = {
  activeDescendantIndex: PropTypes.number
}

export default DropdownMenu
