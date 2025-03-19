import React from 'react'
import styled from 'styled-components'
import {
  FontSizeProps,
  FontWeightProps,
  LineHeightProps,
  SpaceProps,
  TextStyleProps,
  WidthProps,
  compose,
  fontSize,
  fontWeight,
  letterSpacing,
  lineHeight,
  space,
  textStyle,
  width,
} from 'styled-system'
import { typographyAttrs } from '../utils/attrs/typographyAttrs'
import { applyVariations, getPaletteColor } from '../utils/utils'

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

const truncate = (props) =>
  props.truncate
    ? {
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
      }
    : null

/**
 * @public
 */
export type LabelProps = SpaceProps &
  FontSizeProps &
  FontWeightProps &
  LineHeightProps &
  TextStyleProps &
  WidthProps &
  Partial<Omit<HTMLLabelElement, 'children'>> & {
    children?: React.ReactNode
    color?: string
    autoHide?: boolean
    nowrap?: boolean
    for?: string
    as?: unknown
    truncate?: boolean
    onClick?: (evt: unknown) => void
  }

const _Label: React.FC<LabelProps> & { isLabel?: boolean } = styled.label.attrs((props) => ({
  ...typographyAttrs(props),
  ...props,
}))`
  display: block;
  width: 100%;
  margin: 0;
  z-index: 1;
  color: ${getPaletteColor('base')};
  ${(props) => (props.bg ? `background-color: ${getPaletteColor(props.bg, 'base')(props)};` : '')}
  ${(props) => (props.onClick ? 'cursor: pointer;' : '')}

  ${applyVariations('Label')}

  ${nowrap}
  ${accessiblyHide}
  ${truncate}

  ${(props) => compose(fontSize, fontWeight, lineHeight, letterSpacing, space, textStyle, width)(props)}
`

/**
 * @public
 */
export const Label: React.FC<LabelProps> & { isLabel?: boolean } = ({
  color = 'text.light',
  textStyle = 'label',
  ...props
}) => <_Label color={color} textStyle={textStyle} {...props} />

Label.displayName = 'Label'
Label.isLabel = true
