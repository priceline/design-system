import styled from 'styled-components'
import {
  BottomProps,
  LeftProps,
  RightProps,
  TopProps,
  ZIndexProps,
  bottom,
  compose,
  left,
  right,
  top,
  zIndex,
} from 'styled-system'
import { Box, BoxProps } from '../Box/Box'

export type AbsoluteProps = BoxProps & TopProps & RightProps & BottomProps & LeftProps & ZIndexProps

export const Absolute: React.FC<AbsoluteProps> = styled(Box)`
  position: absolute;

  ${(props) => compose(top, bottom, left, right, zIndex)(props)}
`

Absolute.displayName = 'Absolute'
