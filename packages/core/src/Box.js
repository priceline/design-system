import styled from 'styled-components'
import { space, width, textAlign } from 'styled-system'
import { applyVariant, color, deprecatedColorValue } from './utils'

const Box = styled.div`
  ${space} ${width} ${textAlign}
  ${applyVariant('Box')}
  ${color}
`

Box.displayName = 'Box'

Box.propTypes = {
  ...space.propTypes,
  ...width.propTypes,
  color: deprecatedColorValue(),
  ...textAlign.propTypes
}

export default Box
