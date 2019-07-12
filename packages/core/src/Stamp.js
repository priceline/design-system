import React from 'react'
import styled from 'styled-components'
import { themeGet, space, fontSize, color } from 'styled-system'
import theme from './theme'

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
  border-color: ${props => theme.colors[props.borderColor]};
  ${space} ${fontSize} ${color};
`

Stamp.displayName = 'Stamp'

Stamp.propTypes = {
  ...space.propTypes,
  ...fontSize.propTypes,
  ...color.propTypes
}

Stamp.defaultProps = {
  px: 1,
  py: 0,
  theme: theme,
  color: 'gray',
  bg: 'lightGray',
  fontSize: 0,
  borderColor: 'borderGray'
}

export default Stamp
