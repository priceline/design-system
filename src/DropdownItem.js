import PropTypes from 'prop-types'
import styled from 'styled-components'

const parseIsSelectedStyles = props =>
  props.isSelected
    ? {
        backgroundColor: props.theme.colors['blue'],
        color: props.theme.colors['white']
      }
    : null

const parseHoverStyles = props => ({
  backgroundColor: props.theme.colors['blue'],
  color: props.theme.colors['white']
})

const DropdownItem = styled.li.attrs({
  id: props => (props.itemIndex ? `mi${props.itemIndex}` : null),
  role: 'menuitem',
  tabIndex: -1
})`
  list-style: none;

  ${props => parseIsSelectedStyles(props)} &:hover {
    ${props => parseHoverStyles(props)};
  }
`

DropdownItem.displayName = 'DropdownItem'

const numberOrString = PropTypes.oneOfType([PropTypes.number, PropTypes.string])

DropdownItem.propTypes = {
  itemIndex: numberOrString,
  isSelected: PropTypes.bool
}

DropdownItem.defaultProps = {
  isSelected: false
}

export default DropdownItem
