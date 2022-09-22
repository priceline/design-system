import propTypes from '@styled-system/prop-types'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import {
  display,
  DisplayProps,
  fontSize,
  FontSizeProps,
  fontStyle,
  FontStyleProps,
  fontWeight,
  FontWeightProps,
  height,
  HeightProps,
  letterSpacing,
  lineHeight,
  LineHeightProps,
  maxHeight,
  MaxHeightProps,
  maxWidth,
  MaxWidthProps,
  minHeight,
  MinHeightProps,
  minWidth,
  MinWidthProps,
  overflow,
  OverflowProps,
  space,
  SpaceProps,
  textAlign,
  TextAlignProps,
  textStyle,
  TextStyleProps,
  width,
  WidthProps,
  zIndex,
  ZIndexProps,
} from 'styled-system'

import {
  deprecatedColorValue,
  deprecatedPropType,
  getPaletteColor,
  textAlignAttrs,
  textStylesValues,
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
  align: deprecatedPropType('textAlign'),
  bold: PropTypes.bool,
  caps: PropTypes.bool,
  color: deprecatedColorValue(),
  enableTextShadow: PropTypes.bool,
  regular: PropTypes.bool,
  textDecoration: PropTypes.string,
  textShadowSize: PropTypes.oneOf(['sm', 'md']),
  textStyle: PropTypes.oneOf(textStylesValues),
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
  color?: string
  bg?: string
}

const textProps: React.FC<ITextProps> = css`
  background-color: ${({ bg, backgroundColor }) => {
    if (bg || backgroundColor) {
      return getPaletteColor(bg ?? backgroundColor)
    }
    return undefined
  }};
  color: ${({ color }) => getPaletteColor(color ?? 'text.base')};

  ${display}
  ${height}
  ${maxHeight}
  ${maxWidth}
  ${minHeight}
  ${minWidth}
  ${overflow}
  ${space}
  ${width}

  ${caps}
  ${regular}
  ${bold}

  ${fontSize}
  ${fontStyle}
  ${fontWeight}
  ${lineHeight}
  ${letterSpacing}
  ${textAlign}
  ${textDecoration}
  ${textShadow}
  ${textStyle}
  ${zIndex}
`

const textAttrs = (props) => ({
  ...typographyAttrs(props),
  ...textAlignAttrs(props),
})

const Text = styled.div.attrs(textAttrs)`
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

Text.propTypes = textPropTypes

Text.span = Span
Text.span.displayName = 'Text.span'

Text.p = Paragraph
Text.p.displayName = 'Text.p'

Text.s = Strike
Text.s.displayName = 'Text.s'

export default Text
