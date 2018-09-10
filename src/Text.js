import styled from 'styled-components'
import PropTypes from 'prop-types'
import {
  fontSize,
  fontWeight,
  textAlign,
  lineHeight,
  space,
  color
} from 'styled-system'
import theme from './theme'
import { mapProps, deprecatedPropType } from './utils'

export const caps = props =>
  props.caps
    ? {
        textTransform: 'uppercase'
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
  ${fontSize}
  ${fontWeight}
  ${textAlign}
  ${lineHeight}
  ${space}
  ${color}
  ${caps}
  ${regular}
  ${bold}
`)

Text.displayName = 'Text'

Text.propTypes = {
  ...fontSize.propTypes,
  ...fontWeight.propTypes,
  ...textAlign.propTypes,
  ...lineHeight.propTypes,
  ...space.propTypes,
  ...color.propTypes,
  caps: PropTypes.bool,
  regular: PropTypes.bool,
  bold: PropTypes.bool,
  align: deprecatedPropType('textAlign')
}

Text.defaultProps = {
  theme: theme
}

Text.span = Text.withComponent('span')
Text.p = Text.withComponent('p')
Text.s = Text.withComponent('s')

export default Text
