import React from 'react'
import styled from 'styled-components'
import {
  type AlignContentProps,
  type AlignItemsProps,
  type FlexDirectionProps,
  type FlexWrapProps,
  type JustifyContentProps,
  type SpaceProps,
  type WidthProps,
  alignItems,
  compose,
  flexDirection,
  flexWrap,
  justifyContent,
} from 'styled-system'
import { Box, type BoxProps } from '../Box/Box'
import { applyVariations } from '../utils/utils'

/**
 * @public
 */
export type FlexProps = BoxProps &
  SpaceProps &
  WidthProps &
  AlignItemsProps &
  JustifyContentProps &
  AlignContentProps &
  FlexWrapProps &
  FlexDirectionProps

/**
 * @public
 */
const StyledFlex = styled(Box).attrs(({ wrap, align, justify, ...props }) => ({
  flexWrap: wrap ? 'wrap' : undefined,
  alignItems: align,
  justifyContent: justify,
  ...props,
}))<FlexProps>`
  display: flex;
  ${applyVariations('Flex')}

  ${(props) => compose(alignItems, justifyContent, flexDirection, flexWrap)(props)}
`

/**
 * A flexbox container for one-dimensional layouts.
 *
 * Extends `Box` with `display: flex` and flexbox props (`alignItems`, `justifyContent`,
 * `flexDirection`, `flexWrap`). Use for horizontal/vertical alignment, spacing, and
 * responsive layouts. Inherits all Box styling capabilities.
 *
 * @public
 */
export const Flex = React.forwardRef<HTMLDivElement, FlexProps>((props, ref) => (
  <StyledFlex ref={ref} {...props} />
))
Flex.displayName = 'Flex'
