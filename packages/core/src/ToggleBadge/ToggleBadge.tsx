import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import propTypes from '@styled-system/prop-types'
import { space, fontSize, borderRadius, SpaceProps, FontSizeProps, compose } from 'styled-system'
import { applyVariations, getPaletteColor, deprecatedColorValue, borderRadiusAttrs } from '../utils'

const toggleBadgePropTypes = {
  ...propTypes.space,
  ...propTypes.fontSize,
  selected: PropTypes.bool,
  color: deprecatedColorValue(),
  bg: deprecatedColorValue(),
}

export interface IToggleBadgeProps
  extends SpaceProps,
    FontSizeProps,
    React.HTMLAttributes<HTMLInputElement>,
    React.RefAttributes<HTMLInputElement> {
  borderRadius?: string
  selected?: boolean
  color?: string
  bg?: string
  unSelectedBg?: string
}

const ToggleBadge: React.FC<IToggleBadgeProps> = styled.button.attrs(borderRadiusAttrs)`
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

ToggleBadge.propTypes = toggleBadgePropTypes

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

export default ToggleBadge
