import React from 'react'
import PropTypes, { InferProps } from 'prop-types'
import styled from 'styled-components'
import { space, fontSize, borderRadius } from 'styled-system'
import {
  applyVariations,
  getPaletteColor,
  deprecatedColorValue,
  deprecatedPropType,
  borderRadiusAttrs,
} from '../utils'

const propTypes = {
  selected: PropTypes.bool,
  ...space.propTypes,
  ...fontSize.propTypes,
  color: deprecatedColorValue(),
  bg: deprecatedPropType('color'),
}

const ToggleBadge: React.FC<InferProps<typeof propTypes>> = styled.button.attrs(borderRadiusAttrs)`
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
  ${space} ${fontSize} ${borderRadius};
`

ToggleBadge.displayName = 'ToggleBadge'

ToggleBadge.propTypes = propTypes

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
