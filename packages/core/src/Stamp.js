import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { themeGet, space, fontSize } from 'styled-system'
import { getPaletteColor } from './utils'

const Stamp = styled.div`
  display: inline-flex;
  align-items: center;
  vertical-align: top;
  min-height: 24px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: ${themeGet('letterSpacings.caps')};
  border-radius: 2px;
  border-width: 1px;
  border-style: solid;
  border-color: ${({ borderColor, color, ...props }) =>
    getPaletteColor('base')({ color: borderColor, ...props })};
  color: ${getPaletteColor('base')};
  ${({ bg, color, ...props }) =>
    bg
      ? `background-color: ${getPaletteColor('base')({ color: bg, ...props })};`
      : ''}
  
  ${space} ${fontSize};
`

Stamp.displayName = 'Stamp'

Stamp.propTypes = {
  ...space.propTypes,
  ...fontSize.propTypes,
  color: PropTypes.string,
  bg: PropTypes.string,
  borderColor: PropTypes.string
}

Stamp.defaultProps = {
  px: 1,
  py: 0,
  color: 'border.light',
  bg: 'background.light',
  borderColor: 'border.base',
  fontSize: 0
}

export default Stamp
