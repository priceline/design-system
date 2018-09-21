import styled from 'styled-components'
import PropTypes from 'prop-types'
import { color } from 'styled-system'
import theme from './theme'

const Link = styled.a`
  cursor: pointer;
  text-decoration: none;
  ${color} &:hover {
    text-decoration: underline;
  }
`

Link.displayName = 'Link'

Link.propTypes = {
  ...color.propTypes
}

Link.defaultProps = {
  color: 'blue',
  theme: theme
}

export default Link
