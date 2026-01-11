import React, { type ComponentPropsWithRef } from 'react'
import styled, { css } from 'styled-components'
import {
  DisplayProps,
  FontSizeProps,
  FontStyleProps,
  FontWeightProps,
  HeightProps,
  LineHeightProps,
  MaxHeightProps,
  MaxWidthProps,
  MinHeightProps,
  MinWidthProps,
  OverflowProps,
  SpaceProps,
  TextAlignProps,
  TextStyleProps,
  WidthProps,
  ZIndexProps,
  compose,
  display,
  fontSize,
  fontStyle,
  fontWeight,
  height,
  letterSpacing,
  lineHeight,
  maxHeight,
  maxWidth,
  minHeight,
  minWidth,
  overflow,
  space,
  textAlign,
  textStyle,
  width,
  zIndex,
} from 'styled-system'
import type { ColorSchemeName } from '../theme/theme'
import { textAlignAttrs } from '../utils/attrs/textAlignAttrs'
import { typographyAttrs } from '../utils/attrs/typographyAttrs'
import { applyVariations, colorScheme, getPaletteColor, textTransform, textWrap } from '../utils/utils'

/**
 * @public
 */
export const caps = (props) => {
  if (Array.isArray(props.caps) && props.caps.length === 0) {
    return null
  }

  return props?.caps
    ? {
        textTransform: 'uppercase',
      }
    : null
}

export const regular = (props) => (props.regular ? { fontWeight: props.theme.regular } : null)

export const bold = (props) => {
  if (Array.isArray(props.bold) && props.bold.length === 0) {
    return null
  }

  return props.bold ? { fontWeight: props.theme.bold } : null
}

export const textDecoration = (props) =>
  props.textDecoration ? `text-decoration: ${props.textDecoration};` : ''

export const textShadow = (props) => {
  const textShadowSize = props.textShadowSize || 'md'
  return props.enableTextShadow ? { textShadow: props.theme.textShadows[textShadowSize] } : null
}

/**
 * @public
 */
export type TextProps = DisplayProps &
  FontSizeProps &
  FontStyleProps &
  FontWeightProps &
  HeightProps &
  LineHeightProps &
  MaxHeightProps &
  MaxWidthProps &
  MinHeightProps &
  MinWidthProps &
  OverflowProps &
  SpaceProps &
  TextAlignProps &
  TextStyleProps &
  WidthProps &
  ZIndexProps &
  Omit<ComponentPropsWithRef<'div'>, 'color'> & {
    as?: React.ElementType
    bg?: string
    bold?: boolean | boolean[]
    caps?: boolean | boolean[]
    children?: React.ReactNode
    color?: string
    colorScheme?: ColorSchemeName
    enableTextShadow?: boolean
    italic?: boolean
    regular?: boolean
    textColor?: string
    textDecoration?: string
    textShadowSize?: string
    textTransform?: string
    textWrap?: string
  }

export type TextHelperProps = {
  as?: React.ElementType
  bg?: string
  bold?: boolean | boolean[]
  caps?: boolean | boolean[]
  children?: React.ReactNode
  color?: string
  colorScheme?: ColorSchemeName
  enableTextShadow?: boolean
  italic?: boolean
  regular?: boolean
  textColor?: string
  textDecoration?: string
  textShadowSize?: string
  textTransform?: string
  textWrap?: string
}

export type TextSystemProps = DisplayProps &
  FontSizeProps &
  FontStyleProps &
  FontWeightProps &
  HeightProps &
  LineHeightProps &
  MaxHeightProps &
  MaxWidthProps &
  MinHeightProps &
  MinWidthProps &
  OverflowProps &
  SpaceProps &
  TextAlignProps &
  TextStyleProps &
  WidthProps &
  ZIndexProps

export type TextSpanProps = TextSystemProps & TextHelperProps & Omit<ComponentPropsWithRef<'span'>, 'color'>
export type TextParagraphProps = TextSystemProps & TextHelperProps & Omit<ComponentPropsWithRef<'p'>, 'color'>
export type TextStrikeProps = TextSystemProps & TextHelperProps & Omit<ComponentPropsWithRef<'s'>, 'color'>

const textStyles = css<TextProps>`
  ${applyVariations('Text')}
  color: ${getPaletteColor('base')};
  ${(props) => (props.bg ? `background-color: ${getPaletteColor(props.bg, 'base')(props)};` : '')}

  ${bold}
  ${caps}
  ${colorScheme}
  ${regular}
  ${textDecoration}
  ${textShadow}
  ${textTransform}
  ${textWrap}

  ${(props) =>
    compose(
      display,
      height,
      maxHeight,
      maxWidth,
      minHeight,
      minWidth,
      overflow,
      space,
      width,
      fontSize,
      fontStyle,
      fontWeight,
      lineHeight,
      letterSpacing,
      textAlign,
      textStyle,
      zIndex
    )(props)}
`

const textAttrs = (props: TextProps) => ({
  ...typographyAttrs(props),
  ...textAlignAttrs(props),
})

const StyledText = styled.div.attrs<TextProps>(textAttrs)<TextProps>`
  ${textStyles}
`

const StyledSpan = styled.span.attrs<TextSpanProps>(textAttrs)<TextSpanProps>`
  ${textStyles}
`

const StyledParagraph = styled.p.attrs<TextParagraphProps>(textAttrs)<TextParagraphProps>`
  ${textStyles}
`

const StyledStrike = styled.s.attrs<TextStrikeProps>(textAttrs)<TextStrikeProps>`
  ${textStyles}
`

export const TextSpan = React.forwardRef<HTMLSpanElement, TextSpanProps>((props, ref) => (
  <StyledSpan ref={ref} {...props} />
))
TextSpan.displayName = 'Text.span'

export const TextParagraph = React.forwardRef<HTMLParagraphElement, TextParagraphProps>((props, ref) => (
  <StyledParagraph ref={ref} {...props} />
))
TextParagraph.displayName = 'Text.p'

export const TextStrike = React.forwardRef<HTMLElement, TextStrikeProps>((props, ref) => (
  <StyledStrike ref={ref} {...props} />
))
TextStrike.displayName = 'Text.s'

export type TextComponent = React.ForwardRefExoticComponent<
  TextProps & React.RefAttributes<HTMLDivElement>
> & {
  span: typeof TextSpan
  p: typeof TextParagraph
  s: typeof TextStrike
}

/**
 * The core typography component for all text content.
 *
 * Supports `textStyle` presets (heading1-6, subheading1-6, paragraph, etc.) or granular
 * control via `fontSize`, `fontWeight`, `bold`, `italic`. Use dot notation (`Text.p`,
 * `Text.span`, `Text.s`) for semantic HTML elements. Responsive values supported for
 * all typography props.
 *
 * @public
 */
export const Text: TextComponent = React.forwardRef<HTMLDivElement, TextProps>((props, ref) => (
  <StyledText ref={ref} {...props} />
)) as TextComponent
Text.displayName = 'Text'

Text.span = TextSpan
Text.p = TextParagraph
Text.s = TextStrike
