import styled from 'styled-components'
import { Box } from '../Box'
import { top, right, bottom, left, zIndex } from 'styled-system'

const Relative = styled(Box)`
  position: relative;
  ${top} ${bottom} ${left} ${right}
  ${zIndex}
`

Relative.propTypes = {
  ...top.propTypes,
  ...right.propTypes,
  ...bottom.propTypes,
  ...left.propTypes,
  ...zIndex.propTypes,
}

Relative.displayName = 'Relative'

export default Relative
