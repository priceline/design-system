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

import {
  applyVariations,
  colorScheme,
  getPaletteColor,
  textAlignAttrs,
  textTransform,
  textWrap,
  typographyAttrs,
} from '../utils'

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
  ZIndexProps & {
    bg?: string
    children?: React.ReactNode
    color?: string
  }

const textProps: React.FC<TextProps> = css`
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

export const Text = styled.div.attrs(textAttrs)`
  ${textProps}
`

const Span = styled.span.attrs(textAttrs)`
  ${textProps}
`

const Paragraph = styled.p.attrs(textAttrs)`
  ${textProps}
`

const Strike = styled.s.attrs(textAttrs)`
  ${textProps}
`

Text.displayName = 'Text'

Text.span = Span
Text.span.displayName = 'Text.span'

Text.p = Paragraph
Text.p.displayName = 'Text.p'

Text.s = Strike
Text.s.displayName = 'Text.s'
