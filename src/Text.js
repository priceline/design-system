import styled from 'styled-components'
import PropTypes from 'prop-types'
import { fontSize, color } from 'styled-system'
import tag from 'tag-hoc'

export const align = props => props.align ? { textAlign: props.align } : null

export const caps = props => props.caps
  ? {
    textTransform: 'uppercase',
    letterSpacing: '0.2em'
  }
  : null

export const bold = props => props.bold ? { fontWeight: props.theme.bold } : null

const Div = tag()('div')

const Text = styled(Div)`
  ${fontSize}
  ${color}
  ${align}
  ${caps}
  ${bold}
`

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
  color: PropTypes.string
}

export default Text
