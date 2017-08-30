import styled from 'styled-components'
import PropTypes from 'prop-types'
import Text from './Text'

const anchorText = Text.withComponent('a')

const Link = styled(anchorText)`
  cursor: ${props => props.cursor};
  text-decoration: ${props => props.textDecoration};
  display: ${props => props.display};
`

Link.displayName = 'Link'

Link.defaultProps = {
  cursor: 'pointer',
  textDecoration: 'none',
  display: 'inline-block'
}

Link.propTypes = {
  cursor: PropTypes.string,
  textDecoration: PropTypes.string,
  display: PropTypes.string
}

export default Link
