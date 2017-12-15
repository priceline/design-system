import PropTypes from 'prop-types'
import styled from 'styled-components'
import theme from './theme'

const parseIsSelectedStyles = props =>
  props.isSelected
    ? {
        backgroundColor: theme.colors['blue'],
        color: theme.colors['white']
      }
    : null

const parseHoverStyles = () => ({
  backgroundColor: theme.colors['blue'],
  color: theme.colors['white']
})

const DropdownItem = styled.li.attrs({
  id: props => (props.itemIndex ? `mi${props.itemIndex}` : null),
  role: props => props.role,
  tabIndex: props => props.tabIndex
})`
  list-style-type: none;
  ${props => parseIsSelectedStyles(props)} &:hover {
    ${parseHoverStyles()};
  }
`

DropdownItem.displayName = 'DropdownItem'

DropdownItem.propTypes = {
  itemIndex: PropTypes.number,
  role: PropTypes.string,
  tabIndex: PropTypes.number,
  isSelected: PropTypes.bool
}

export default DropdownItem
