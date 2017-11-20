import React from 'react'
import PropTypes from 'prop-types'
import { theme } from 'styled-system'

import { Flex } from '../src'

const DropdownFlex = Flex.extend`
  cursor: pointer;
  min-height: 48px;
  border-radius: ${theme('radius')};
  border-width: 1px;
  border-style: solid;
  border-color: ${theme('colors.borderGray')};
`

const DropdownButton = props => (
  <DropdownFlex justify="center" align="center">
    {props.children}
  </DropdownFlex>
)

DropdownButton.displayName = 'DropdownButton'

DropdownButton.propTypes = {
  open: PropTypes.bool
}

DropdownButton.defaultProps = {
  open: false
}

export default DropdownButton
