import React from 'react'
import styled from 'styled-components'
import { themeGet, space, fontSize } from 'styled-system'
import {
  applyVariations,
  getPaletteColor,
  deprecatedColorValue,
  deprecatedPropType
} from './utils'

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
  border-color: ${props => getPaletteColor(props.borderColor, 'base')(props)};
  color: ${getPaletteColor('base')};
  ${props =>
    props.bg
      ? `background-color: ${getPaletteColor(props.bg, 'base')(props)};`
      : ''}
  
  ${space} ${fontSize};
  ${applyVariations('Stamp')}
`

Stamp.displayName = 'Stamp'

Stamp.propTypes = {
  ...space.propTypes,
  ...fontSize.propTypes,
  color: deprecatedColorValue(),
  bg: deprecatedPropType('color'),
  borderColor: deprecatedColorValue()
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
