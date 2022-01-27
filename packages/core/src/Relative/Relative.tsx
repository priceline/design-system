import React from 'react'
import { InferProps } from 'prop-types'
import styled from 'styled-components'
import { Box } from '../Box'
import { top, right, bottom, left, zIndex } from 'styled-system'

const propTypes = {
  ...top.propTypes,
  ...right.propTypes,
  ...bottom.propTypes,
  ...left.propTypes,
  ...zIndex.propTypes,
}

const Relative: React.FC<InferProps<typeof propTypes>> = styled(Box)`
  position: relative;
  ${top} ${bottom} ${left} ${right}
  ${zIndex}
`

Relative.propTypes = propTypes

Relative.displayName = 'Relative'

export default Relative
