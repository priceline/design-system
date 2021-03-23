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
  ...alignItems.propTypes,
  ...justifyContent.propTypes,
  ...flexWrap.propTypes,
  ...flexDirection.propTypes,
}

Flex.displayName = 'Flex'

export default Flex
