import React from 'react'
import styled from 'styled-components'
import {
  type BottomProps,
  type LeftProps,
  type RightProps,
  type TopProps,
  type ZIndexProps,
  bottom,
  compose,
  left,
  right,
  top,
  zIndex,
} from 'styled-system'
import { Box, type BoxProps } from '../Box/Box'

/**
 * @public
 */
export type AbsoluteProps = BoxProps & TopProps & RightProps & BottomProps & LeftProps & ZIndexProps

/**
 * @public
 */
const StyledAbsolute = styled(Box)<AbsoluteProps>`
  position: absolute;

  ${(props) => compose(top, bottom, left, right, zIndex)(props)}
`

/**
 * Positions child elements absolutely within a `Relative` container.
 *
 * Extends `Box` with `position: absolute` and positioning props (`top`, `right`, `bottom`,
 * `left`, `zIndex`). Wrap your content in a `Relative` component to establish the
 * positioning context.
 *
 * Use for floating labels, overlay badges, corner-anchored icons, dismiss buttons, and
 * stacked layers.
 *
 * @public
 */
export const Absolute = React.forwardRef<HTMLDivElement, AbsoluteProps>((props, ref) => (
  <StyledAbsolute ref={ref} {...props} />
))
Absolute.displayName = 'Absolute'
