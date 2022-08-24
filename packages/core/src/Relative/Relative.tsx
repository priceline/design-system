import React from 'react'
import styled from 'styled-components'
import { Box, IBoxProps } from '../Box'
import {
  top,
  right,
  bottom,
  left,
  zIndex,
  TopProps,
  RightProps,
  BottomProps,
  LeftProps,
  ZIndexProps,
} from 'styled-system'
import propTypes from '@styled-system/prop-types'

const relativePropTypes = {
  ...propTypes.top,
  ...propTypes.right,
  ...propTypes.bottom,
  ...propTypes.left,
  ...propTypes.zIndex,
}

export interface IRelativeProps
  extends TopProps,
    RightProps,
    BottomProps,
    LeftProps,
    ZIndexProps,
    IBoxProps {}

const Relative: React.FC<IRelativeProps> = styled(Box)`
  position: relative;
  ${top} ${bottom} ${left} ${right}
  ${zIndex}
`

Relative.propTypes = relativePropTypes

Relative.displayName = 'Relative'

export default Relative
