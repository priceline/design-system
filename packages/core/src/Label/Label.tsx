import React from 'react'
import styled from 'styled-components'
import {
  space,
  fontSize,
  fontWeight,
  width,
  SpaceProps,
  FontSizeProps,
  FontWeightProps,
  WidthProps,
} from 'styled-system'
import propTypes from '@styled-system/prop-types'
import { applyVariations, getPaletteColor, deprecatedColorValue } from '../utils'

const nowrap = (props) =>
  props.nowrap
    ? {
        whiteSpace: 'nowrap',
      }
    : null

const accessiblyHide = (props) =>
  props.hidden
    ? {
        position: 'absolute',
        width: '1px',
        height: '1px',
        clip: 'rect(1px, 1px, 1px, 1px)',
      }
    : null

const labelPropTypes = {
  ...propTypes.space,
  ...propTypes.fontSize,
  ...propTypes.fontWeight,
  ...propTypes.width,
  color: deprecatedColorValue(),
}

export interface ILabelProps
  extends SpaceProps,
    FontSizeProps,
    FontWeightProps,
    WidthProps,
    Partial<Omit<HTMLLabelElement, 'children'>> {
  children?: React.ReactNode | string
  color?: string
  autoHide?: boolean
  nowrap?: boolean
  for?: string
}

const Label: React.FC<ILabelProps> & { isLabel?: boolean } = styled.label`
  font-size: 10px;
  letter-spacing: 0.2px;
  display: block;
  width: 100%;
  margin: 0;
  color: ${getPaletteColor('base')};
  ${(props) => (props.bg ? `background-color: ${getPaletteColor(props.bg, 'base')(props)};` : '')}

  ${applyVariations('Label')}
  ${space} ${fontSize} ${fontWeight} ${width};
  ${nowrap}
  ${accessiblyHide}
`

Label.propTypes = labelPropTypes

Label.defaultProps = {
  fontSize: '10px',
  fontWeight: 'bold',
  color: 'text.light',
}

Label.displayName = 'Label'
Label.isLabel = true

export default Label
