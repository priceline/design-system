import PropTypes from 'prop-types'
import { width, height } from 'styled-system'
import Card from './Card'

const CardWithUL = Card.withComponent('ul')

const DropdownMenu = CardWithUL.extend.attrs({
  id: 'dropdownMenu',
  role: 'menu',
  tabIndex: 0,
  'aria-labelledby': 'dropdownButton',
  'aria-activedescendant': props =>
    props.activeDescendantIndex ? `mi${props.activeDescendantIndex}` : null
})`
  height: ${props => props.height}px;
  -moz-padding-start: 0;
  -webkit-padding-start: 0;
  overflow: scroll;
  -webkit-overflow-scrolling: scroll;

  ${width}
`

DropdownMenu.displayName = 'DropdownMenu'

const numberOrString = PropTypes.oneOfType([PropTypes.number, PropTypes.string])

DropdownMenu.propTypes = {
  height: numberOrString,
  activeDescendantIndex: numberOrString
}

export default DropdownMenu
