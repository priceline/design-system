import { themeGet } from '@styled-system/theme-get'
import React, { type ComponentPropsWithRef } from 'react'
import styled from 'styled-components'
import { space, SpaceProps } from 'styled-system'
import { StyledBox } from '../Box/Box'
import { PaletteFamilyName } from '../theme/theme'
import { getPaletteColor } from '../utils/utils'

/**
 * @public
 */
export type InputGroupProps = SpaceProps &
  ComponentPropsWithRef<'div'> & {
    borderColor?: PaletteFamilyName
  }

const StyledInputGroup = styled.div<InputGroupProps>`
  display: flex;
  align-items: center;
  border-radius: ${themeGet('borderRadii.xl')};
  border-width: 1px;
  border-style: solid;
  border-color: ${(props) => getPaletteColor(props.borderColor, 'base')(props)};

  & > ${StyledBox} {
    width: 100%;
    flex: 1 1 auto;
  }

  & input {
    border: 0;
    box-shadow: none;
  }

  ${space}
`

/**
 * A container that groups related input elements with shared border styling.
 *
 * Wraps multiple inputs or buttons in a unified bordered container. Useful for
 * search bars with buttons or segmented input controls. Child Box components
 * automatically flex to fill available space.
 *
 * @public
 */
export const InputGroup = React.forwardRef<HTMLDivElement, InputGroupProps>(
  ({ borderColor = 'border', ...props }, ref) => (
    <StyledInputGroup ref={ref} borderColor={borderColor} {...props} />
  )
)
InputGroup.displayName = 'InputGroup'
