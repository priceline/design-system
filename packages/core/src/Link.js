import PropTypes from 'prop-types'
import styled from 'styled-components'
import theme from './theme'
import { getVariantStyle } from './utils'

const Link = styled.a`
  cursor: pointer;
  text-decoration: none;

  ${getVariantStyle('link')}
`

Link.displayName = 'Link'

Link.defaultProps = {
  theme: theme,
  variant: 'primary'
}

Link.propTypes = {
  variant: PropTypes.oneOf(['primary', 'secondary', 'title', 'navigation'])
}

export default Link
