import React from 'react'
import styled from 'styled-components'
import system, { space, fontSize } from 'styled-system'

import theme from './theme'
import Flex from './Flex'
import Icon from './Icon'

const ClickableIcon = Icon.extend`
  pointer-events: none;
`

const SelectBase = styled.select`
  appearance: none;
  display: block;
  width: 100%;
  font-family: inherit;
  color: inherit;
  background-color: transparent;
  border-radius: ${system.theme('radius')};
  border-width: 1px;
  border-style: solid;
  border-color: ${system.theme('colors.borderGray')};
  ${space} ${fontSize} &:focus {
    outline: none;
    border-color: ${system.theme('colors.blue')};
    box-shadow: 0 0 0 1px ${system.theme('colors.blue')};
  }
`
SelectBase.defaultProps = {
  theme,
  fontSize: 1,
  m: 0,
  pl: 12,
  pr: 32,
  py: 14
}

const Select = styled(props => (
  <Flex align="center">
    <SelectBase {...props} />
    <ClickableIcon ml={-32} name="chevronDown" color="gray" />
  </Flex>
))``

export default Select
