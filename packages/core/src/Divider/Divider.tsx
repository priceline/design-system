import React from 'react'
import styled from 'styled-components'
import { BorderColorProps, SpaceProps, WidthProps, compose, space, width } from 'styled-system'
import { ColorName, PaletteColor, PaletteFamilyName } from '../theme/theme'
import { applyVariations, getPaletteColor } from '../utils/utils'

/**
 * @public
 */
export type DividerProps = SpaceProps &
  WidthProps &
  BorderColorProps & {
    color?: ColorName | PaletteFamilyName | PaletteColor
  }

/**
 * @public
 */
export const Divider: React.FC<DividerProps> = styled.hr.attrs(
  ({ color = 'border', mx, ml = 0, mr = 0 }) => ({
    color: color,
    ml: mx ? null : ml,
    mr: mx ? null : mr,
  })
)`
  border: 0;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-color: ${(props) => getPaletteColor(props.borderColor || props.color, 'base')(props)};
  background-color: ${(props) => getPaletteColor(props.borderColor || props.color, 'base')(props)};
  ${applyVariations('Divider')}

  ${(props) => compose(space, width)(props)}
`

Divider.displayName = 'Divider'
