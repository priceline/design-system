import React from 'react'
import PropTypes from 'prop-types'

import { Box, Text } from '../src'

const parseBackgroundColor = props =>
  props.isSelected ? props.theme.colors['blue'] : null

const parseColor = props =>
  props.isSelected ? props.theme.colors['white'] : null

const DropdownFieldBox = Box.extend`
  background-color: ${props => parseBackgroundColor(props)};
  color: ${props => parseColor(props)};
  &:hover {
    background-color: ${props => props.theme.colors['blue']};
    color: ${props => props.theme.colors['white']};
    cursor: pointer;
  }
`

const DropdownField = ({ isSelected, children }) => (
  <DropdownFieldBox py={3} px={5} isSelected={isSelected}>
    <Text fontSize={0}>{children}</Text>
  </DropdownFieldBox>
)

DropdownField.displayName = 'DropdownField'

DropdownField.propTypes = {
  isSelected: PropTypes.bool.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
}

DropdownField.defaultProps = {
  isSelected: false
}

export default DropdownField
