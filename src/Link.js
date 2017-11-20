import styled from 'styled-components'
import PropTypes from 'prop-types'
import { color } from 'styled-system'
import theme from './theme'

const Link = styled.a`
  text-decoration: none;
  ${color} &:hover {
    text-decoration: underline;
  }
`

Link.displayName = 'Link'

Link.propTypes = {
  color: PropTypes.string
}

Link.defaultProps = {
  color: 'blue',
  theme: theme
}

export default Link
