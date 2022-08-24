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
} from 'styled-system'
import propTypes from '@styled-system/prop-types'

import { Box, IBoxProps } from '../Box'

import { applyVariations, deprecatedColorValue } from '../utils'

const flexPropTypes = {
  ...propTypes.space,
  ...propTypes.width,
  ...propTypes.alignItems,
  ...propTypes.justifyContent,
  ...propTypes.flexWrap,
  ...propTypes.flexDirection,
  color: deprecatedColorValue(),
  bg: deprecatedColorValue(),
}

export interface IFlexProps
  extends IBoxProps,
    SpaceProps,
    WidthProps,
    AlignItemsProps,
    JustifyContentProps,
    AlignContentProps,
    FlexWrapProps,
    FlexDirectionProps {}

const Flex: React.FC<IFlexProps> = styled(Box).attrs(({ wrap, align, justify, ...props }) => ({
  flexWrap: wrap ? 'wrap' : undefined,
  alignItems: align,
  justifyContent: justify,
  ...props,
}))`
  display: flex;
  ${applyVariations('Flex')}
  ${alignItems} ${justifyContent}
  ${flexDirection}
  ${flexWrap}
`

Flex.propTypes = flexPropTypes

Flex.displayName = 'Flex'

export default Flex
