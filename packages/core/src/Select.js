import React from 'react'
import styled from 'styled-components'
import { space, fontSize, themeGet } from 'styled-system'
import ChevronDown from 'pcln-icons/lib/ChevronDown'

import theme from './theme'
import Flex from './Flex'

const ClickableChevron = styled(ChevronDown)`
  pointer-events: none;
`

const SelectBase = styled.select`
  appearance: none;
  display: block;
  width: 100%;
  font-family: inherit;
  color: inherit;
  background-color: transparent;
  border-radius: ${themeGet('radius')};
  border-width: 1px;
  border-style: solid;
  border-color: ${themeGet('colors.borderGray')};
  ${space} ${fontSize} &:focus {
    outline: none;
    border-color: ${themeGet('colors.blue')};
    box-shadow: 0 0 0 1px ${themeGet('colors.blue')};
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

SelectBase.propTypes = {
  ...space.propTypes,
  ...fontSize.propTypes
}

const Select = styled(props => (
  <Flex width={1} alignItems="center">
    <SelectBase {...props} />
    <ClickableChevron ml={-32} color="gray" />
  </Flex>
))``

export default Select
