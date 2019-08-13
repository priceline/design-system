import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { space, fontSize } from 'styled-system'
import { applyVariations, getPaletteColor, deprecatedColorValue } from './utils'

const ToggleBadge = styled.button`
  border-radius: ${props => props.theme.radius};
  border: 0;
  display: inline-block;
  font-weight: ${props => props.theme.bold};
  font-family: inherit;
  cursor: pointer;
  background-color: ${({ color, ...props }) =>
    props.selected
      ? getPaletteColor('light')({ color: props.bg || color, ...props })
      : props.unSelectedBg};
  color: ${getPaletteColor('base')};
  ${space} ${fontSize};
  &:hover {
    background-color: ${({ color, ...props }) =>
      getPaletteColor('light')({ color: props.bg || color, ...props })};
  }
  ${applyVariations('ToggleBadge')}
`

ToggleBadge.displayName = 'ToggleBadge'

ToggleBadge.propTypes = {
  selected: PropTypes.bool,
  ...space.propTypes,
  ...fontSize.propTypes,
  color: deprecatedColorValue(),
  bg: deprecatedColorValue()
}

ToggleBadge.defaultProps = {
  selected: false,
  px: 2,
  py: 1,
  mx: 1,
  my: 1,
  fontSize: 0,
  color: 'primary',
  unSelectedBg: 'transparent'
}

export default ToggleBadge
