import styled from 'styled-components'
import PropTypes from 'prop-types'
import {
  textStyle,
  fontSize,
  fontWeight,
  textAlign,
  lineHeight,
  space,
  themeGet
} from 'styled-system'
import {
  mapProps,
  deprecatedPropType,
  deprecatedColorValue,
  applyVariations,
  getPaletteColor
} from './utils'

export const caps = props =>
  props.caps
    ? {
        textTransform: 'uppercase',
        letterSpacing: themeGet('letterSpacings.caps')(props)
      }
    : null

export const regular = props =>
  props.regular ? { fontWeight: props.theme.regular } : null

export const bold = props =>
  props.bold ? { fontWeight: props.theme.bold } : null

const Text = mapProps(({ align, ...props }) => ({
  textAlign: align,
  ...props
}))(styled.div`
  color: ${getPaletteColor('base')};
  ${props =>
    props.bg
      ? `background-color: ${getPaletteColor(props.bg, 'base')(props)};`
      : ''}
  ${applyVariations('Text')}
  ${textStyle}
  ${fontSize}
  ${fontWeight}
  ${textAlign}
  ${lineHeight}
  ${space}
  ${caps}
  ${regular}
  ${bold}
`)

Text.displayName = 'Text'

Text.propTypes = {
  ...textStyle.propTypes,
  ...fontSize.propTypes,
  ...fontWeight.propTypes,
  ...textAlign.propTypes,
  ...lineHeight.propTypes,
  ...space.propTypes,
  color: deprecatedColorValue(),
  caps: PropTypes.bool,
  regular: PropTypes.bool,
  bold: PropTypes.bool,
  align: deprecatedPropType('textAlign')
}

Text.span = Text.withComponent('span')
Text.p = Text.withComponent('p')
Text.s = Text.withComponent('s')

export default Text
