import type { ColorSchemeName } from '../theme'

import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'
import propTypes from '@styled-system/prop-types'
import {
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
} from 'styled-system'

import {
  applyVariations,
  colorScheme,
  deprecatedColorValue,
  getPaletteColor,
  textAlignAttrs,
  textStylesValues,
  textTransform,
  textTransformValues,
  textWrap,
  textWrapValues,
  typographyAttrs,
} from '../utils'

export const caps = (props) => {
  if (Array.isArray(props.caps) && props.caps.length === 0) {
    return null
  }

  return props?.caps ? 'text-transform: uppercase;' : null
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

const textPropTypes = {
  ...propTypes.display,
  ...propTypes.fontSize,
  ...propTypes.fontStyle,
  ...propTypes.fontWeight,
  ...propTypes.height,
  ...propTypes.lineHeight,
  ...propTypes.maxHeight,
  ...propTypes.maxWidth,
  ...propTypes.minHeight,
  ...propTypes.minWidth,
  ...propTypes.overflow,
  ...propTypes.space,
  ...propTypes.textAlign,
  ...propTypes.textStyle,
  ...propTypes.width,
  ...propTypes.zIndex,
  bold: PropTypes.bool,
  caps: PropTypes.bool,
  color: deprecatedColorValue(),
  enableTextShadow: PropTypes.bool,
  regular: PropTypes.bool,
  textDecoration: PropTypes.string,
  textShadowSize: PropTypes.oneOf(['sm', 'md']),
  textStyle: PropTypes.oneOf(textStylesValues),
  textTransform: PropTypes.oneOf(textTransformValues),
  textWrap: PropTypes.oneOf(textWrapValues),
}

export interface ITextProps
  extends DisplayProps,
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
    ZIndexProps {
  bold?: boolean
  color?: string
  bg?: string
  children?: React.ReactNode
  colorScheme?: ColorSchemeName
  textDecoration?: string
  textTransform?: string

  regular?: boolean
  caps?: boolean
  italic?: boolean

  as?: string
}

const textProps = css<ITextProps>`
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

const textAttrs = (props) => ({
  ...typographyAttrs(props),
  ...textAlignAttrs(props),
})

const Text: React.FC<ITextProps> & {
  span: React.FC<ITextProps>
  p: React.FC<ITextProps>
  s: React.FC<ITextProps>
} = styled.div.attrs(textAttrs)`
  ${textProps}
`

const Span: React.FC<ITextProps> = styled.span.attrs(textAttrs)`
  ${textProps}
`

const Paragraph: React.FC<ITextProps> = styled.p.attrs(textAttrs)`
  ${textProps}
`

const Strike: React.FC<ITextProps> = styled.s.attrs(textAttrs)`
  ${textProps}
`

Text.displayName = 'Text'

Text.propTypes = textPropTypes

Text.span = Span
Text.span.displayName = 'Text.span'

Text.p = Paragraph
Text.p.displayName = 'Text.p'

Text.s = Strike
Text.s.displayName = 'Text.s'

export default Text
