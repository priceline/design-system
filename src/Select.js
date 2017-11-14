import React from 'react'
import PropTypes from 'prop-types'
import { theme } from 'styled-system'

import { Box, Flex, Icon, Label } from '../src'

const SelectFlex = Flex.extend`
  cursor: pointer;
  height: 48px;
  border-radius: ${theme('radius')};
  border-width: 1px;
  border-style: solid;
  border-color: ${theme('colors.borderGray')};
`

const SelectBox = Box.extend`
  cursor: pointer;
`

const SelectLabel = Label.extend`
  cursor: pointer;
`

const Select = props => (
  <SelectFlex justify="center" align="center">
    <SelectBox pl={3}>
      <Icon name="key" size={24} color="blue" />
    </SelectBox>
    <SelectBox pr={3}>
      <SelectLabel fontSize={1} pl={2} align="left">
        {props.children}
      </SelectLabel>
    </SelectBox>
    <SelectBox pl={5}>
      <Icon
        name={props.isExpanded ? 'chevronUp' : 'chevronDown'}
        size={props.isExpanded ? 24 : 12}
        color="black"
      />
    </SelectBox>
  </SelectFlex>
)

Select.displayName = 'Select'

Select.propTypes = {
  isExpanded: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
}

Select.defaultProps = {
  isExpanded: false
}

export default Select
