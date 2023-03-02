import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {
  space,
  fontSize,
  fontWeight,
  letterSpacing,
  lineHeight,
  textStyle,
  width,
  SpaceProps,
  FontSizeProps,
  FontWeightProps,
  LineHeightProps,
  TextStyleProps,
  WidthProps,
} from 'styled-system'
import propTypes from '@styled-system/prop-types'
import {
  applyVariations,
  getPaletteColor,
  deprecatedColorValue,
  textStylesValues,
  typographyAttrs,
} from '../utils'

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
  ...propTypes.lineHeight,
  ...propTypes.textStyle,
  ...propTypes.width,
  color: deprecatedColorValue(),
  textStyle: PropTypes.oneOf(textStylesValues),
}

export interface ILabelProps
  extends SpaceProps,
    FontSizeProps,
    FontWeightProps,
    LineHeightProps,
    TextStyleProps,
    WidthProps,
    Partial<Omit<HTMLLabelElement, 'children'>> {
  children?: React.ReactNode | string
  color?: string
  autoHide?: boolean
  nowrap?: boolean
  for?: string
  onClick?: (evt: unknown) => void
}

const Label: React.FC<ILabelProps> & { isLabel?: boolean } = styled.label.attrs((props) => ({
  ...typographyAttrs(props),
  ...props,
}))`
  display: block;
  width: 100%;
  margin: 0;
  color: ${getPaletteColor('base')};
  ${(props) => (props.bg ? `background-color: ${getPaletteColor(props.bg, 'base')(props)};` : '')}
  ${(props) => (props.onClick ? 'cursor: pointer;' : '')}

  ${applyVariations('Label')}
  
  ${fontSize}
  ${fontWeight}
  ${lineHeight}
  ${letterSpacing}
  ${space}
  ${textStyle}
  ${width}

  ${nowrap}
  ${accessiblyHide}
`

Label.propTypes = labelPropTypes

Label.defaultProps = {
  color: 'text.light',
  textStyle: 'label',
}

Label.displayName = 'Label'
Label.isLabel = true

export default Label
