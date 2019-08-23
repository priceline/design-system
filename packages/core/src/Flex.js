import styled from 'styled-components'
import Box from './Box'
import {
  space,
  width,
  alignItems,
  justifyContent,
  flexWrap,
  flexDirection
} from 'styled-system'
import {
  applyVariations,
  mapProps,
  deprecatedPropType,
  deprecatedColorValue
} from './utils'

const Flex = mapProps(({ wrap, align, justify, ...props }) => ({
  flexWrap: wrap ? 'wrap' : undefined,
  alignItems: align,
  justifyContent: justify,
  ...props
}))(styled(Box)`
  display: flex;
  ${alignItems} ${justifyContent}
  ${flexDirection}
  ${flexWrap}
  ${applyVariations('Flex')}
`)

Flex.propTypes = {
  ...space.propTypes,
  ...width.propTypes,
  color: deprecatedColorValue(),
  bg: deprecatedPropType(),
  ...alignItems.propTypes,
  ...justifyContent.propTypes,
  ...flexWrap.propTypes,
  ...flexDirection.propTypes,
  wrap: deprecatedPropType('flexWrap'),
  align: deprecatedPropType('alignItems'),
  justify: deprecatedPropType('justifyContent')
}

Flex.displayName = 'Flex'

export default Flex
