import React from 'react'
import styled from 'styled-components'
import {
  BottomProps,
  LeftProps,
  RightProps,
  TopProps,
  ZIndexProps,
  bottom,
  left,
  right,
  top,
  zIndex,
} from 'styled-system'
import { Box, type BoxProps } from '../Box/Box'

/**
 * @public
 */
export type RelativeProps<T extends HTMLElement = HTMLDivElement> = TopProps &
  RightProps &
  BottomProps &
  LeftProps &
  ZIndexProps &
  BoxProps<T>

/**
 * @public
 */
export const Relative: React.FC<RelativeProps> = styled(Box)`
  position: relative;
  ${top} ${bottom} ${left} ${right}
  ${zIndex}
`

Relative.displayName = 'Relative'
