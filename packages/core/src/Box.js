import styled from 'styled-components'
import { space, width, textAlign } from 'styled-system'
import { applyVariations, color, deprecatedColorValue } from './utils'

const Box = styled.div`
  ${space} ${width} ${textAlign}
  ${applyVariations('Box')}
  ${color}
`

Box.displayName = 'Box'

Box.propTypes = {
  ...space.propTypes,
  ...width.propTypes,
  color: deprecatedColorValue(),
  bg: deprecatedColorValue(),
  ...textAlign.propTypes
}

export default Box
