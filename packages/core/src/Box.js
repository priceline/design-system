import styled from 'styled-components'
import { space, width, color, textAlign } from 'styled-system'
import { applyVariant } from './utils'

const Box = styled.div`
  ${applyVariant('Box')}
  ${space} ${width} ${color} ${textAlign}
`

Box.displayName = 'Box'

Box.propTypes = {
  ...space.propTypes,
  ...width.propTypes,
  ...color.propTypes,
  ...textAlign.propTypes
}

export default Box
