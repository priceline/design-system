import styled from 'styled-components'
import PropTypes from 'prop-types'
import { fontSize, space, color, responsiveStyle } from 'styled-system'

export const caps = props => props.caps
  ? {
    textTransform: 'uppercase',
    letterSpacing: '0.2em'
  }
  : null

export const bold = props => props.bold ? { fontWeight: props.theme.bold } : null

const align = responsiveStyle('text-align', 'align')

const Text = styled.div`
  ${fontSize}
  ${space}
  ${color}
  ${caps}
  ${bold}
  ${align}
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

Text.span = Text.withComponent('span')
Text.p = Text.withComponent('p')

export default Text
