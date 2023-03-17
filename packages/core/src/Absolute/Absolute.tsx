import styled from 'styled-components'
import { top, right, bottom, left, zIndex, compose } from 'styled-system'

import { Box } from '../Box'

const Absolute = styled(Box)`
  position: absolute;

  ${(props) => compose(top, bottom, left, right, zIndex)(props)}
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
