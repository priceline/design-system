import styled from 'styled-components'
import { top, right, bottom, left, zIndex } from 'styled-system'
import styledSystemPropTypes from '@styled-system/prop-types'

import { Box } from '../Box'

const Absolute = styled(Box)`
  position: absolute;
  ${top} ${bottom} ${left} ${right}
  ${zIndex}
`

Absolute.propTypes = {
  ...styledSystemPropTypes.top,
  ...styledSystemPropTypes.right,
  ...styledSystemPropTypes.bottom,
  ...styledSystemPropTypes.left,
  ...styledSystemPropTypes.zIndex,
}

Absolute.displayName = 'Absolute'

export default Absolute
