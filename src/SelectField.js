import React from 'react'
import PropTypes from 'prop-types'

import { Box, Text } from '../src'

const parseIsSelected = props => {
  return `
    ${props.isSelected
      ? `background-color: ${props.theme.colors['blue']};`
      : null}
    ${props.isSelected ? `color: ${props.theme.colors['white']};` : null}
  `
}

const SelectFieldBox = Box.extend`
  &:hover {
    background-color: ${props => props.theme.colors['blue']};
    color: ${props => props.theme.colors['white']};
    cursor: pointer;
  }
  ${parseIsSelected};
`

const SelectField = ({ isSelected, children }) => (
  <SelectFieldBox py={3} px={5} isSelected={isSelected}>
    <Text fontSize={0}>{children}</Text>
  </SelectFieldBox>
)

SelectField.displayName = 'SelectField'

SelectField.propTypes = {
  isSelected: PropTypes.bool.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
}

SelectField.defaultProps = {
  isSelected: false
}

export default SelectField
