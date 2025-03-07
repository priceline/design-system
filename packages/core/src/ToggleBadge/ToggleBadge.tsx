import React, { type ComponentPropsWithRef } from 'react'
import styled from 'styled-components'
import { FontSizeProps, SpaceProps, borderRadius, compose, fontSize, space } from 'styled-system'
import { borderRadiusAttrs } from '../utils/attrs'
import { applyVariations, getPaletteColor } from '../utils/utils'

/**
 * @public
 */
export type ToggleBadgeProps = {
  borderRadius?: string
  selected?: boolean
  color?: string
  bg?: string
  unSelectedBg?: string
} & SpaceProps &
  FontSizeProps &
  ComponentPropsWithRef<'button'>

const _ToggleBadge: React.FC<ToggleBadgeProps> = styled.button.attrs(borderRadiusAttrs)`
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

/**
 * @public
 */
export const ToggleBadge: React.FC<ToggleBadgeProps> = ({
  borderRadius = 'full',
  color = 'primary',
  fontSize = 0,
  mx = 1,
  my = 1,
  px = 2,
  py = 1,
  selected = false,
  unSelectedBg = 'transparent',
  ...props
}) => {
  return (
    <_ToggleBadge
      borderRadius={borderRadius}
      color={color}
      fontSize={fontSize}
      mx={mx}
      my={my}
      px={px}
      py={py}
      selected={selected}
      unSelectedBg={unSelectedBg}
      {...props}
    />
  )
}

ToggleBadge.displayName = 'ToggleBadge'
