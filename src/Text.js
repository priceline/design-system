import styled from 'styled-components'
import PropTypes from 'prop-types'
import {
  fontSize,
  fontWeight,
  textAlign,
  space,
  color,
  propTypes
} from 'styled-system'
import theme from './theme'

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

const Text = styled.div`
  ${fontSize}
  ${fontWeight}
  ${textAlign}
  ${space}
  ${color}
  ${caps}
  ${regular}
  ${bold}
`

Text.displayName = 'Text'

Text.propTypes = {
  ...propTypes.fontSize,
  ...propTypes.fontWeight,
  ...propTypes.textAlign,
  ...propTypes.space,
  ...propTypes.color,
  caps: PropTypes.bool,
  regular: PropTypes.bool,
  bold: PropTypes.bool
}

Text.defaultProps = {
  theme: theme
}

Text.span = Text.withComponent('span')
Text.p = Text.withComponent('p')
Text.s = Text.withComponent('s')

export default Text
