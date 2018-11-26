import React from 'react'
import styled from 'styled-components'
import system, { space, fontSize } from 'styled-system'

import theme from './theme'
import Flex from './Flex'
import Icon from './Icon'

const ClickableIcon = styled(Icon)`
  pointer-events: none;
`
const size = props => {
  switch (props.size) {
    case 'small':
      return {
        fontSize: `${props.theme.fontSizes[0]}px`,
        padding: '7px 12px'
      }
    case 'medium':
      return {
        fontSize: `${props.theme.fontSizes[1]}px`,
        padding: '9.5px 18px'
      }
    case 'large':
      return {
        fontSize: `${props.theme.fontSizes[2]}px`,
        padding: '12px 22px'
      }
    default:
      return {
        fontSize: `${props.theme.fontSizes[1]}px`,
        padding: '9.5px 18px'
      }
  }
}

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
  border-color: ${system.theme('colors.gray300')};
  ${space} ${fontSize} &:focus {
    outline: none;
    border-color: ${system.theme('colors.primary')};
    box-shadow: 0 0 0 1px ${system.theme('colors.primary')};
  }
  ${space} ${size};
`
SelectBase.defaultProps = {
  theme,
  fontSize: 1,
  m: 0,
  pl: 12,
  pr: 40,
  py: 14
}

const Select = styled(props => (
  <Flex width={1} align="center">
    <SelectBase {...props} />
    <ClickableIcon
      ml={-32}
      name="chevronDown"
      color={theme.colors.gray500}
      size={12}
    />
  </Flex>
))``

export default Select
