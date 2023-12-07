import React from 'react'
import styled from 'styled-components'
import {
  alignItems,
  justifyContent,
  flexWrap,
  flexDirection,
  AlignItemsProps,
  JustifyContentProps,
  FlexWrapProps,
  FlexDirectionProps,
  SpaceProps,
  WidthProps,
  AlignContentProps,
  compose,
} from 'styled-system'

import { Box, BoxProps } from '../Box'

import { applyVariations } from '../utils'

export type FlexProps = BoxProps &
  SpaceProps &
  WidthProps &
  AlignItemsProps &
  JustifyContentProps &
  AlignContentProps &
  FlexWrapProps &
  FlexDirectionProps

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
