import styled from 'styled-components'
import { space, width, color, textAlign } from 'styled-system'
import PropTypes from 'prop-types'
import theme from './theme'

const Box = styled.div`
  ${space} ${width} ${color} ${textAlign}
`

Box.displayName = 'Box'

Box.defaultProps = {
  theme: theme
}

Box.propTypes = {
  ...space.propTypes,
  ...width.propTypes,
  ...color.propTypes,
  ...textAlign.propTypes
}

export default Box
