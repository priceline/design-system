import React from 'react'
import PropTypes from 'prop-types'
import { theme } from 'styled-system'

import { Box, Flex, Icon, Label } from '../src'

const DropdownFlex = Flex.extend`
  cursor: pointer;
  height: 48px;
  border-radius: ${theme('radius')};
  border-width: 1px;
  border-style: solid;
  border-color: ${theme('colors.borderGray')};
`

const Dropdown = props => (
  <DropdownFlex justify="center" align="center">
    {props.withIcon && (
      <Box>
        <Icon name="key" size={24} color="blue" />
      </Box>
    )}
    <Box pr={3}>
      <Label fontSize={1} pl={props.withIcon ? 2 : 0} align="left">
        {props.children}
      </Label>
    </Box>
    <Box pl={5}>
      <Icon
        name={props.open ? 'chevronUp' : 'chevronDown'}
        size={props.open ? 24 : 12}
        color="black"
      />
    </Box>
  </DropdownFlex>
)

Dropdown.displayName = 'Dropdown'

Dropdown.propTypes = {
  withIcon: PropTypes.bool,
  open: PropTypes.bool
}

Dropdown.defaultProps = {
  withIcon: true,
  open: false
}

export default Dropdown
