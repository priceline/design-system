import styled from 'styled-components'
import {
  top,
  right,
  bottom,
  left,
  zIndex,
  compose,
  TopProps,
  RightProps,
  BottomProps,
  LeftProps,
  ZIndexProps,
} from 'styled-system'

import { Box, IBoxProps } from '../Box'

export interface IAbsoluteProps extends IBoxProps, TopProps, RightProps, BottomProps, LeftProps, ZIndexProps {
  children?: React.ReactNode
}

const Absolute: React.FC<IAbsoluteProps> = styled(Box)`
  position: absolute;

  ${(props) => compose(top, bottom, left, right, zIndex)(props)}
`

Absolute.displayName = 'Absolute'

export default Absolute
