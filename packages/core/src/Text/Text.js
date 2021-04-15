import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'
import {
  display,
  fontSize,
  fontWeight,
  height,
  lineHeight,
  maxHeight,
  maxWidth,
  minHeight,
  minWidth,
  overflow,
  space,
  textAlign,
  textStyle,
  themeGet,
  width,
  zIndex,
} from 'styled-system'

import {
  deprecatedPropType,
  deprecatedColorValue,
  applyVariations,
  getPaletteColor,
} from '../utils'

export const caps = (props) =>
  props.caps
    ? {
        textTransform: 'uppercase',
        letterSpacing: themeGet('letterSpacings.caps')(props),
      }
    : null

export const regular = (props) =>
  props.regular ? { fontWeight: props.theme.regular } : null

export const bold = (props) =>
  props.bold ? { fontWeight: props.theme.bold } : null

export const textShadow = (props) => {
  const textShadowSize = props.textShadowSize || 'md'
  return props.enableTextShadow
    ? { textShadow: props.theme.textShadows[textShadowSize] }
    : null
}

const textProps = css`
  ${applyVariations('Text')}
  color: ${getPaletteColor('base')};
  ${(props) =>
    props.bg
      ? `background-color: ${getPaletteColor(props.bg, 'base')(props)};`
      : ''}

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

  ${textStyle}
  ${fontSize}
  ${fontWeight}
  ${textAlign}
  ${lineHeight}
  ${textShadow}
  ${zIndex}
`

const Text = styled.div.attrs(({ align, ...props }) => ({
  textAlign: align,
  ...props,
}))`
  ${textProps}
`
const Span = styled.span.attrs(({ align, ...props }) => ({
  textAlign: align,
  ...props,
}))`
  ${textProps}
`

const Paragraph = styled.p.attrs(({ align, ...props }) => ({
  textAlign: align,
  ...props,
}))`
  ${textProps}
`

const Strike = styled.s.attrs(({ align, ...props }) => ({
  textAlign: align,
  ...props,
}))`
  ${textProps}
`

Text.displayName = 'Text'

Text.propTypes = {
  ...display.propTypes,
  ...fontSize.propTypes,
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
  textShadowSize: PropTypes.oneOf(['sm', 'md']),
}

Text.span = Span
Text.span.displayName = 'Text.span'

Text.p = Paragraph
Text.p.displayName = 'Text.p'

Text.s = Strike
Text.s.displayName = 'Text.s'

export default Text
