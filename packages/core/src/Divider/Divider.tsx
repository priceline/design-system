import React, { type ComponentPropsWithRef } from 'react'
import styled from 'styled-components'
import { BorderColorProps, SpaceProps, WidthProps, compose, space, width } from 'styled-system'
import { ColorName, PaletteColor, PaletteFamilyName } from '../theme/theme'
import { applyVariations, getPaletteColor } from '../utils/utils'

/**
 * @public
 */
export type DividerProps = ComponentPropsWithRef<'hr'> &
  SpaceProps &
  WidthProps &
  BorderColorProps & {
    color?: ColorName | PaletteFamilyName | PaletteColor
  }

const StyledDivider = styled.hr.attrs<DividerProps>(({ mx, ml, mr }) => ({
  ml: mx ? null : ml,
  mr: mx ? null : mr,
}))<DividerProps>`
  border: 0;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-color: ${(props) => getPaletteColor(props.borderColor || props.color, 'base')(props)};
  background-color: ${(props) => getPaletteColor(props.borderColor || props.color, 'base')(props)};
  ${applyVariations('Divider')}

  ${(props) => compose(space, width)(props)}
`

/**
 * A horizontal rule for visually separating content sections.
 *
 * Renders as an `<hr>` element with customizable color and spacing. Use between
 * content blocks to create clear visual boundaries. Supports theme palette colors
 * via the `color` or `borderColor` props, and styled-system space/width props for
 * layout control.
 *
 * @public
 */
export const Divider = React.forwardRef<HTMLHRElement, DividerProps>(
  ({ color = 'border', ml = 0, mr = 0, ...props }, ref) => (
    <StyledDivider ref={ref} color={color} ml={ml} mr={mr} {...props} />
  )
)
Divider.displayName = 'Divider'
