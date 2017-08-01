import styled from 'styled-components'
import PropTypes from 'prop-types'
import { fontSize, color } from 'styled-system'

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
  ${color}
  ${align}
  ${caps}
  ${bold}
`

Text.propTypes = {
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
