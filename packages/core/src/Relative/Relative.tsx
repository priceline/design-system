import React from 'react'
import styled from 'styled-components'
import {
  type BottomProps,
  type LeftProps,
  type RightProps,
  type TopProps,
  type ZIndexProps,
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
export type RelativeProps = TopProps & RightProps & BottomProps & LeftProps & ZIndexProps & BoxProps

/**
 * @public
 */
const StyledRelative = styled(Box)<RelativeProps>`
  position: relative;
  ${top} ${bottom} ${left} ${right}
  ${zIndex}
`

/**
 * A container with relative positioning for anchoring absolute children.
 *
 * Extends `Box` with `position: relative`. Use as a positioning context for
 * `Absolute` children. Essential for layered layouts with overlapping elements
 * like badges, close buttons, or floating labels.
 *
 * @public
 */
export const Relative = React.forwardRef<HTMLDivElement, RelativeProps>((props, ref) => (
  <StyledRelative ref={ref} {...props} />
))
Relative.displayName = 'Relative'
