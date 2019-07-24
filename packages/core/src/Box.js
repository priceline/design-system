import PropTypes from 'prop-types'
import styled from 'styled-components'
import { space, width, textAlign } from 'styled-system'
import { applyVariant, color } from './utils'

const Box = styled.div`
  ${space} ${width} ${textAlign}
  ${applyVariant('Box')}
  ${color}
`

Box.displayName = 'Box'

Box.propTypes = {
  ...space.propTypes,
  ...width.propTypes,
  color: PropTypes.string,
  ...textAlign.propTypes
}

export default Box
