import React from 'react'
import styled from 'styled-components'
import {
  AlignContentProps,
  AlignItemsProps,
  FlexDirectionProps,
  FlexWrapProps,
  JustifyContentProps,
  SpaceProps,
  WidthProps,
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
export const Flex: React.FC<FlexProps> = styled(Box).attrs(({ wrap, align, justify, ...props }) => ({
  flexWrap: wrap ? 'wrap' : undefined,
  alignItems: align,
  justifyContent: justify,
  ...props,
}))`
  display: flex;
  ${applyVariations('Flex')}

  ${(props) => compose(alignItems, justifyContent, flexDirection, flexWrap)(props)}
`
