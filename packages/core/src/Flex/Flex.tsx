import styled from 'styled-components'
import {
  space,
  width,
  alignItems,
  justifyContent,
  flexWrap,
  flexDirection,
  FlexDirectionProps,
  FlexWrapProps,
  JustifyContentProps,
  AlignItemsProps,
} from 'styled-system'

import { ColorProps } from '../@types/colorProps'
import { Box, BoxProps } from '../Box'

import {
  applyVariations,
  mapProps,
  deprecatedPropType,
  deprecatedColorValue,
} from '../utils'

export interface FlexProps
  extends ColorProps,
    BoxProps,
    FlexDirectionProps,
    FlexWrapProps,
    JustifyContentProps,
    AlignItemsProps {
  /**
   * @deprecated Use flexWrap instead
   */
  wrap?: string
  /**
   * @deprecated Use alignItems instead
   */
  align?: string
  /**
   * @deprecated Use justifyContent instead
   */
  justify?: string
}

const Flex: React.FC<FlexProps> = mapProps(
  ({ wrap, align, justify, ...props }) => ({
    flexWrap: wrap ? 'wrap' : undefined,
    alignItems: align,
    justifyContent: justify,
    ...props,
  })
)(styled(Box)<FlexProps>`
  display: flex;
  ${alignItems} ${justifyContent}
  ${flexDirection}
  ${flexWrap}
  ${applyVariations('Flex')}
`)

Flex.propTypes = {
  color: deprecatedColorValue(),
  bg: deprecatedPropType('color'),
  wrap: deprecatedPropType('flexWrap'),
  align: deprecatedPropType('alignItems'),
  justify: deprecatedPropType('justifyContent'),
}

Flex.displayName = 'Flex'

export default Flex
