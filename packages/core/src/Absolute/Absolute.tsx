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
import styledSystemPropTypes from '@styled-system/prop-types'

import { Box, IBoxProps } from '../Box'

export interface IAbsoluteProps extends IBoxProps {
  top?: TopProps
  right?: RightProps
  bottom?: BottomProps
  left?: LeftProps
  zIndex?: ZIndexProps
}

const Absolute = styled(Box)`
  position: absolute;

  ${(props) => compose(top, bottom, left, right, zIndex)(props)}
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
