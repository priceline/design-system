import PropTypes from 'prop-types'
import Card from './Card'

const CardWithUL = Card.withComponent('ul')

const DropdownMenu = CardWithUL.extend.attrs({
  id: props => props.id,
  role: props => props.role,
  tabIndex: props => props.tabIndex,
  'aria-labelledby': props => props.ariaLabelledBy,
  'aria-activedescendant': props =>
    props.ariaActiveDescendantIndex
      ? `mi${props.ariaActiveDescendantIndex}`
      : null
})`
  -moz-padding-start: 0;
  -webkit-padding-start: 0;
  overflow-x: ${props => props.overflow};
  overflow-y: ${props => props.overflow};
  -webkit-overflow-scrolling: ${props => props.overflow};
  height: ${props => (props.height ? props.height : null)};
`

DropdownMenu.displayName = 'DropdownMenu'

DropdownMenu.propTypes = {
  id: PropTypes.string,
  role: PropTypes.string,
  tabIndex: PropTypes.number,
  ariaLabelledBy: PropTypes.string,
  ariaActiveDescendantIndex: PropTypes.number,
  overflow: PropTypes.string,
  height: PropTypes.string
}

export default DropdownMenu
