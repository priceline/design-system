import styled from 'styled-components'
import {
  space,
  width,
  alignItems,
  justifyContent,
  flexWrap,
  flexDirection,
} from 'styled-system'

import { Box } from '../Box'

import {
  applyVariations,
  deprecatedPropType,
  deprecatedColorValue,
} from '../utils'

const Flex = styled(Box).attrs(({ wrap, align, justify, ...props }) => ({
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

Flex.propTypes = {
  ...space.propTypes,
  ...width.propTypes,
  color: deprecatedColorValue(),
  bg: deprecatedPropType('color'),
  ...alignItems.propTypes,
  ...justifyContent.propTypes,
  ...flexWrap.propTypes,
  ...flexDirection.propTypes,
  wrap: deprecatedPropType('flexWrap'),
  align: deprecatedPropType('alignItems'),
  justify: deprecatedPropType('justifyContent'),
}

Flex.displayName = 'Flex'

export default Flex
