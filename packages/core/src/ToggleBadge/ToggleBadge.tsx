import React from 'react'
import styled from 'styled-components'
import { space, fontSize, borderRadius, SpaceProps, FontSizeProps, compose } from 'styled-system'
import { applyVariations, getPaletteColor, borderRadiusAttrs } from '../utils'

export type ToggleBadgeProps = {
  borderRadius?: string
  selected?: boolean
  color?: string
  bg?: string
  unSelectedBg?: string
} & SpaceProps &
  FontSizeProps &
  React.HTMLAttributes<HTMLInputElement> &
  React.RefAttributes<HTMLInputElement>

export const ToggleBadge: React.FC<ToggleBadgeProps> = styled.button.attrs(borderRadiusAttrs)`
  border-radius: ${(props) => props.theme.radius};
  border: 0;
  display: inline-block;
  font-weight: ${(props) => props.theme.bold};
  font-family: inherit;
  cursor: pointer;
  background-color: ${(props) =>
    props.selected ? getPaletteColor(props.bg || props.color, 'light')(props) : props.unSelectedBg};
  color: ${getPaletteColor('base')};
  &:hover {
    background-color: ${(props) => getPaletteColor(props.bg || props.color, 'light')(props)};
  }
  ${applyVariations('ToggleBadge')}

  ${(props) => compose(space, fontSize, borderRadius)(props)}
`

ToggleBadge.displayName = 'ToggleBadge'

ToggleBadge.defaultProps = {
  borderRadius: 'full',
  selected: false,
  px: 2,
  py: 1,
  mx: 1,
  my: 1,
  fontSize: 0,
  color: 'primary',
  unSelectedBg: 'transparent',
}
