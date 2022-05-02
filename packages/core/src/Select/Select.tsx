import React from 'react'
import { InferProps } from 'prop-types'
import styled, { css } from 'styled-components'
import { space, fontSize, themeGet, borderRadius } from 'styled-system'
import { ChevronDown } from 'pcln-icons'

import { borders, deprecatedColorValue, applySizes, borderRadiusAttrs } from '../utils'
import { Flex } from '../Flex'

const sizes = {
  small: css`
    padding: 6px 32px 7px 12px;
  `,
  medium: css`
    padding: 10px 32px 11px 12px;
  `,
  large: css`
    padding: 14px 32px 14px 12px;
  `,
  xlarge: css`
    padding: 18px 32px 19px 12px;
  `,
}

const ClickableIcon = styled(ChevronDown)`
  pointer-events: none;
`

const propTypes = {
  ...space.propTypes,
  ...fontSize.propTypes,
  color: deprecatedColorValue(),
}
const SelectBase: React.FC<InferProps<typeof propTypes>> = styled.select.attrs(borderRadiusAttrs)`
  appearance: none;
  display: block;
  width: 100%;
  font-family: inherit;
  color: inherit;
  background-color: transparent;
  border-radius: ${themeGet('borderRadii.lg')};
  border-width: 1px;
  border-style: solid;

  ${({ theme }) => applySizes(sizes, undefined, theme.mediaQueries)};
  ${borders} ${space} ${fontSize} ${borderRadius}
  ::-ms-expand {
    display: none;
  }
`

SelectBase.defaultProps = {
  fontSize: [2, null, 1],
  m: 0,
  size: 'large',
  borderRadius: 'large',
}

SelectBase.propTypes = propTypes

const Select = React.forwardRef((props, ref) => (
  <Flex width={1} alignItems='center'>
    <SelectBase {...props} ref={ref} />
    <ClickableIcon ml={-32} color='text.light' />
  </Flex>
))

Select.displayName = 'Select'
Select.isField = true

export default Select
