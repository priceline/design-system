import React from 'react'
import PropTypes from 'prop-types'
import { theme } from 'styled-system'

import { Flex, OutlineButton } from '../src'

const DropdownOutlineButton = OutlineButton.extend.attrs({
  id: 'dropdownButton',
  type: 'button',
  'aria-haspopup': 'true',
  'aria-controls': 'dropdownMenu',
  'aria-expanded': props => (props.open ? 'true' : 'false')
})`
  cursor: pointer;
  width: 100%;
  min-height: 44px;
  border-color: ${theme('colors.borderGray')};
  &:hover {
    border-color: ${theme('colors.blue')};
  }
`

const DropdownButton = props => (
  <DropdownOutlineButton open={props.open}>
    <Flex justify="center" align="center" mx={-2}>
      {props.children}
    </Flex>
  </DropdownOutlineButton>
)

DropdownButton.displayName = 'DropdownButton'

const numberStringOrArray = PropTypes.oneOfType([
  PropTypes.number,
  PropTypes.string,
  PropTypes.array
])

DropdownButton.propTypes = {
  width: numberStringOrArray,
  open: PropTypes.bool
}

DropdownButton.defaultProps = {
  open: false
}

export default DropdownButton
