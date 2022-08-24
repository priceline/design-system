import React from 'react'
import styled from 'styled-components'
import { applyVariations, getPaletteColor, deprecatedColorValue } from '../utils'
import { space, width, SpaceProps, WidthProps, BorderColorProps } from 'styled-system'
import propTypes from '@styled-system/prop-types'

const dividerPropTypes = {
  ...propTypes.space,
  ...propTypes.width,
  ...propTypes.borderColor,
  color: deprecatedColorValue(),
}

export interface IDividerProps extends SpaceProps, WidthProps, BorderColorProps {
  color?: string
}

const Divider: React.FC<IDividerProps> = styled.hr.attrs(({ mx, ml, mr }) => ({
  ml: mx ? null : ml,
  mr: mx ? null : mr,
}))`
  border: 0;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-color: ${(props) => getPaletteColor(props.borderColor || props.color, 'base')(props)};
  background-color: ${(props) => getPaletteColor(props.borderColor || props.color, 'base')(props)};
  ${applyVariations('Divider')}
  ${space} ${width};
`

Divider.displayName = 'Divider'

Divider.defaultProps = {
  color: 'border',
  ml: 0,
  mr: 0,
}

Divider.propTypes = dividerPropTypes

export default Divider
