import styled from 'styled-components'
import Box from './Box'
import { top, right, bottom, left, zIndex } from 'styled-system'

const Absolute = styled(Box)`
  position: absolute;
  ${top} ${bottom} ${left} ${right}
  ${zIndex}
`

Absolute.propTypes = {
  ...top.propTypes,
  ...right.propTypes,
  ...bottom.propTypes,
  ...left.propTypes,
  ...zIndex.propTypes
}

Absolute.displayName = 'Absolute'

export default Absolute
