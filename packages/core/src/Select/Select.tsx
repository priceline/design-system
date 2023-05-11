import React from 'react'
import { InferProps } from 'prop-types'
import styled, { css } from 'styled-components'
import { space, fontSize, borderRadius, SpaceProps, FontSizeProps, compose } from 'styled-system'
import themeGet from '@styled-system/theme-get'
import styledSystemPropTypes from '@styled-system/prop-types'
import { ChevronDown } from 'pcln-icons'
import { borders, deprecatedColorValue, applySizes, borderRadiusAttrs } from '../utils'
import { Flex } from '../Flex'

const sizes = {
  sm: css`
    padding: 6px 32px 7px 12px;
  `,
  md: css`
    padding: 10px 32px 11px 12px;
  `,
  lg: css`
    padding: 14px 32px 14px 12px;
  `,
  xl: css`
    padding: 18px 32px 19px 12px;
  `,
}

const ClickableIcon = styled(ChevronDown)`
  pointer-events: none;
`

const propTypes = {
  ...styledSystemPropTypes.space,
  ...styledSystemPropTypes.fontSize,
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

  ::-ms-expand {
    display: none;
  }

  ${({ theme }) => applySizes(sizes, undefined, theme.mediaQueries)};

  ${borders}

  ${(props) => compose(space, fontSize, borderRadius)(props)}
`

SelectBase.defaultProps = {
  fontSize: [2, null, 1],
  m: 0,
  size: 'lg',
  borderRadius: 'lg',
}

SelectBase.propTypes = propTypes

export interface ISelectProps extends SpaceProps, FontSizeProps {}

const Select: React.FC<
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Pick<any, string | number | symbol> & React.RefAttributes<unknown>
> & { isField?: boolean } = React.forwardRef((props, ref) => (
  <Flex width={1} alignItems='center'>
    <SelectBase {...props} ref={ref} />
    <ClickableIcon ml={-32} color='text.light' />
  </Flex>
))

Select.displayName = 'Select'
Select.isField = true

export default Select
