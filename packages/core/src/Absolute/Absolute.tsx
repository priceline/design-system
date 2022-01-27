import styled from 'styled-components'
import { top, right, bottom, left, zIndex } from 'styled-system'

import { Box } from '../Box'

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
  ...zIndex.propTypes,
}

Absolute.displayName = 'Absolute'

export default Absolute
