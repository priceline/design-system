import React from 'react'
import PropTypes from 'prop-types'
import { theme } from 'styled-system'

import { Flex, OutlineButton } from '../src'

const OutlineButtonExtended = OutlineButton.extend`
  cursor: pointer;
  width: 100%;
  min-height: 44px;
  border-color: ${theme('colors.borderGray')};
  &:hover {
    border-color: ${theme('colors.blue')};
  }
`

const DropdownButton = props => (
  <OutlineButtonExtended>
    <Flex justify="center" align="center" mx={-2}>
      {props.children}
    </Flex>
  </OutlineButtonExtended>
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
