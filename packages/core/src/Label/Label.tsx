import React, { type ComponentPropsWithRef } from 'react'
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
  Omit<ComponentPropsWithRef<'label'>, 'color'> & {
    children?: React.ReactNode
    color?: string
    autoHide?: boolean
    nowrap?: boolean
    as?: unknown
    truncate?: boolean
    bg?: string
  }

const StyledLabel = styled.label.attrs<LabelProps>((props) => ({
  ...typographyAttrs(props),
  ...props,
}))<LabelProps>`
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

export type LabelComponent = React.ForwardRefExoticComponent<
  LabelProps & React.RefAttributes<HTMLLabelElement>
> & {
  isLabel?: boolean
}

/**
 * A form label for associating text with input elements.
 *
 * Use `htmlFor` to link the label to an input by ID, or wrap the input as a child.
 * Supports `autoHide` to show only when the associated input has a value. The `nowrap`
 * prop prevents text wrapping for inline layouts like radio button groups.
 *
 * @public
 */
export const Label: LabelComponent = React.forwardRef<HTMLLabelElement, LabelProps>(
  ({ color = 'text.light', textStyle = 'label', ...props }, ref) => (
    <StyledLabel ref={ref} color={color} textStyle={textStyle} {...props} />
  )
) as LabelComponent
Label.displayName = 'Label'
Label.isLabel = true
