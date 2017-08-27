import styled from 'styled-components'
import PropTypes from 'prop-types'
import { fontSize, space, color } from 'styled-system'

export const align = props => props.align ? { textAlign: props.align } : null

export const caps = props => props.caps
  ? {
    textTransform: 'uppercase',
    letterSpacing: '0.2em'
  }
  : null

export const bold = props => props.bold ? { fontWeight: props.theme.bold } : null

const Text = styled.div`
  ${fontSize}
  ${space}
  ${color}
  ${align}
  ${caps}
  ${bold}
`

Text.displayName = 'Text'

const numberStringOrArray = PropTypes.oneOfType([
  PropTypes.number,
  PropTypes.string,
  PropTypes.array
])

Text.propTypes = {
  fontSize: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.array
  ]),
  align: PropTypes.oneOf([
    'left',
    'center',
    'right',
    'justify'
  ]),
  caps: PropTypes.bool,
  bold: PropTypes.bool,
  color: PropTypes.string,
  /** Margin */
  m: numberStringOrArray,
  mt: numberStringOrArray,
  mr: numberStringOrArray,
  mb: numberStringOrArray,
  ml: numberStringOrArray,
  mx: numberStringOrArray,
  my: numberStringOrArray,
  /** Padding */
  p: numberStringOrArray,
  pt: numberStringOrArray,
  pr: numberStringOrArray,
  pb: numberStringOrArray,
  pl: numberStringOrArray,
  px: numberStringOrArray,
  py: numberStringOrArray
}

Text.h1 = Text.withComponent('h1')
Text.h2 = Text.withComponent('h2')
Text.h3 = Text.withComponent('h3')
Text.h4 = Text.withComponent('h4')
Text.h5 = Text.withComponent('h5')
Text.h6 = Text.withComponent('h6')
Text.span = Text.withComponent('span')
Text.p = Text.withComponent('p')

export default Text
