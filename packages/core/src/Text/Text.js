import React from 'react'
import styled from 'styled-components'
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

const Text = styled.div.attrs(({ align, ...props }) => ({
  textAlign: align,
  ...props,
}))`
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

Text.span = ({ children, ...props }) => (
  <Text as='span' {...props}>
    {children}
  </Text>
)
Text.span.displayName = 'Span'

Text.p = ({ children, ...props }) => (
  <Text as='p' {...props}>
    {children}
  </Text>
)
Text.p.displayName = 'Paragraph'

Text.s = ({ children, ...props }) => (
  <Text as='s' {...props}>
    {children}
  </Text>
)
Text.s.displayName = 'Strikethrough'

export default Text
