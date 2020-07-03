import styled from 'styled-components'
import {
  top,
  right,
  bottom,
  left,
  zIndex,
  padding,
  TopProps,
  RightProps,
  BottomProps,
  LeftProps,
  ZIndexProps,
} from 'styled-system'

import { Box, BoxProps } from '../Box'

export interface AbsoluteProps
  extends BoxProps,
    TopProps,
    RightProps,
    BottomProps,
    LeftProps,
    ZIndexProps {}

export const Absolute = styled(Box)<AbsoluteProps>`
  position: absolute;
  ${top} ${bottom} ${left} ${right}
  ${padding}
  ${zIndex}
` as React.FC<AbsoluteProps>

Absolute.displayName = 'Absolute'

export default Absolute
