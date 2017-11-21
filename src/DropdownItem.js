import React from 'react'
import PropTypes from 'prop-types'

import { Box, Text } from '../src'

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

const DropdownFieldBox = Box.extend`
  ${props => parseIsSelected(props)} &:hover {
    ${props => parseHover(props)};
  }
`

const DropdownItem = props => (
  <DropdownFieldBox py={3} px={5} isSelected={props.isSelected}>
    <Text fontSize={0} align="left">
      {props.children}
    </Text>
  </DropdownFieldBox>
)

DropdownItem.displayName = 'DropdownItem'

DropdownItem.propTypes = {
  isSelected: PropTypes.bool
}

DropdownItem.defaultProps = {
  isSelected: false
}

export default DropdownItem
