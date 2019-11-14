import React from 'react'
import styled from 'styled-components'
import { space, fontSize, themeGet } from 'styled-system'
import { ChevronDown } from 'pcln-icons'
import { getPaletteColor, deprecatedColorValue } from './utils'
import Flex from './Flex'

const ClickableIcon = styled(ChevronDown)`
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
  border-color: ${getPaletteColor('border.base')};
  ${space} ${fontSize} &:focus {
    outline: none;
    border-color: ${getPaletteColor('base')};
    box-shadow: 0 0 0 1px ${getPaletteColor('base')};
  }
  ::-ms-expand {
    display: none;
  }
`
SelectBase.defaultProps = {
  fontSize: [2, null, 1],
  m: 0,
  pl: 12,
  pr: 32,
  py: 14,
  color: 'primary'
}

SelectBase.propTypes = {
  ...space.propTypes,
  ...fontSize.propTypes,
  color: deprecatedColorValue()
}

const Select = styled(props => (
  <Flex width={1} alignItems="center">
    <SelectBase {...props} />
    <ClickableIcon ml={-32} color="text.light" />
  </Flex>
))``

Select.isField = true

export default Select
