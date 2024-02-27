import themeGet from '@styled-system/theme-get'
import { ChevronDown } from 'pcln-icons'
import React from 'react'
import styled, { css } from 'styled-components'
import { FontSizeProps, SpaceProps, borderRadius, compose, fontSize, space } from 'styled-system'
import { Flex } from '../Flex/Flex'
import { BorderRadius, PaletteColor } from '../theme/theme'
import { borderRadiusAttrs } from '../utils/attrs/borderRadiusAttrs'
import { applySizes, applyVariations, borders, getPaletteColor } from '../utils/utils'

/**
 * @public
 */
export const selectSizes = {
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

/**
 * @public
 */
const variations = {
  input: css``,
  subtle: css`
    background-color: ${getPaletteColor('background.base')};
    color: ${getPaletteColor('primary.base')};
    &:hover {
      background-color: ${getPaletteColor('background.tint')};
      color: ${getPaletteColor('dark')};
    }
    &:focus-visible {
      outline: 0px solid ${getPaletteColor('dark')};
      box-shadow: 0 0 0 2px ${getPaletteColor('dark')};
    }

    & ~ svg {
      color: ${getPaletteColor('primary.base')};
    }
  `,
}

/**
 * @public
 */
export type SelectSizes = keyof typeof selectSizes

const ClickableIcon = styled(ChevronDown)`
  pointer-events: none;
`

/**
 * @public
 */
export type SelectVariations = 'input' | 'subtle'

/**
 * @public
 */
export type SelectProps = SpaceProps &
  FontSizeProps &
  Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'size'> & {
    children?: React.ReactNode
    color?: PaletteColor
    borderRadius?: BorderRadius
    size?: SelectSizes
    ref?: React.Ref<React.ForwardedRef<unknown>>
    variation?: SelectVariations
  }

const SelectBase: React.FC<SelectProps> = styled.select.attrs(borderRadiusAttrs)`
  appearance: none;
  background-color: transparent;
  border-radius: ${themeGet('borderRadii.lg')};
  border-style: solid;
  border-width: 1px;
  color: inherit;
  display: block;
  font-family: inherit;
  width: 100%;
  text-overflow: ellipsis;

  ::-ms-expand {
    display: none;
  }

  &:disabled {
    background-color: ${getPaletteColor('background.light')};
    color: ${getPaletteColor('text.light')};
    cursor: not-allowed;
    opacity: 1;
  }

  ${({ theme }) => applySizes(selectSizes, undefined, theme.mediaQueries)};
  ${applyVariations('Select', variations)};

  ${borders}

  ${(props) => compose(space, fontSize, borderRadius)(props)}
`

SelectBase.defaultProps = {
  borderRadius: 'lg',
  fontSize: [2, null, 1],
  m: 0,
  size: 'lg',
}

/**
 * @public
 */
export const Select: React.FC<SelectProps> & { isField?: boolean } = React.forwardRef(
  ({ variation = 'input', ...props }, ref) => (
    <Flex width={1} alignItems='center'>
      <SelectBase {...props} ref={ref} variation={variation} />
      <ClickableIcon ml={-32} color='text.light' />
    </Flex>
  )
)

Select.displayName = 'Select'
Select.isField = true
