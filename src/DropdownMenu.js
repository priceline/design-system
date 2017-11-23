import PropTypes from 'prop-types'
import { width } from 'styled-system'
import Card from './Card'

const CardWithUL = Card.withComponent('ul')

const DropdownMenu = CardWithUL.extend.attrs({
  id: 'dropdownMenu',
  role: 'menu',
  tabIndex: 0,
  'aria-labelledby': 'dropdownButton',
  'aria-activedescendant': props =>
    typeof props.activeDescendantIndex === 'number'
      ? `mi${props.activeDescendantIndex}`
      : null
})`
  height: 200px;
  -moz-padding-start: 0;
  -webkit-padding-start: 0;
  overflow: scroll;
  -webkit-overflow-scrolling: scroll;

  ${width}
`

DropdownMenu.displayName = 'DropdownMenu'

const numberOrString = PropTypes.oneOfType([PropTypes.number, PropTypes.string])

DropdownMenu.propTypes = {
  activeDescendantIndex: numberOrString
}

export default DropdownMenu
