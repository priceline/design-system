import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const parseIsSelected = props =>
  props.isSelected
    ? {
        backgroundColor: props.theme.colors['blue'],
        color: props.theme.colors['white']
      }
    : null

const parseHover = props => ({
  backgroundColor: props.theme.colors['blue'],
  color: props.theme.colors['white'],
  cursor: 'pointer'
})

const DropdownItemLI = styled.li.attrs({
  id: props => `mi${props.itemIdenx}`,
  role: 'menuitem',
  tabIndex: -1
})`
  list-style: none;

  ${props => parseIsSelected(props)} &:hover {
    ${props => parseHover(props)};
  }
`

const DropdownItem = props => (
  <DropdownItemLI
    itemIdenx={props.itemIdenx}
    py={3}
    px={5}
    isSelected={props.isSelected}
  >
    {props.children}
  </DropdownItemLI>
)

DropdownItem.displayName = 'DropdownItem'

DropdownItem.propTypes = {
  itemIdenx: PropTypes.number.isRequired,
  isSelected: PropTypes.bool
}

DropdownItem.defaultProps = {
  isSelected: false
}

export default DropdownItem
