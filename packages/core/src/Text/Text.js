import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'
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
} from 'styled-system'

import {
  applyVariations,
  deprecatedColorValue,
  deprecatedPropType,
  getPaletteColor,
  textAlignAttrs,
  textStylesValues,
  typographyAttrs,
} from '../utils'

export const caps = (props) =>
  props.caps
    ? {
        textTransform: 'uppercase',
      }
    : null

export const regular = (props) => (props.regular ? { fontWeight: props.theme.regular } : null)

export const bold = (props) => (props.bold ? { fontWeight: props.theme.bold } : null)

export const textDecoration = (props) =>
  props.textDecoration ? `text-decoration: ${props.textDecoration};` : ''

export const textShadow = (props) => {
  const textShadowSize = props.textShadowSize || 'md'
  return props.enableTextShadow ? { textShadow: props.theme.textShadows[textShadowSize] } : null
}

const textProps = css`
  ${applyVariations('Text')}
  color: ${getPaletteColor('base')};
  ${(props) => (props.bg ? `background-color: ${getPaletteColor(props.bg, 'base')(props)};` : '')}

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

Text.propTypes = {
  ...display.propTypes,
  ...fontSize.propTypes,
  ...fontStyle.propTypes,
  ...fontWeight.propTypes,
  ...height.propTypes,
  ...lineHeight.propTypes,
  ...maxHeight.propTypes,
  ...maxWidth.propTypes,
  ...minHeight.propTypes,
  ...minWidth.propTypes,
  ...overflow.propTypes,
  ...space.propTypes,
  ...textAlign.propTypes,
  ...textStyle.propTypes,
  ...width.propTypes,
  ...zIndex.propTypes,
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

Text.span = Span
Text.span.displayName = 'Text.span'

Text.p = Paragraph
Text.p.displayName = 'Text.p'

Text.s = Strike
Text.s.displayName = 'Text.s'

export default Text
